import url from 'url';
import qs from 'querystring';
import moment from 'moment';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';

// Link account
export function link(provider) {
  switch (provider) {
    default:
      return {
        type: 'LINK_FAILURE',
        messages: [{ msg: 'Invalid OAuth Provider' }]
      }
  }
}

// Unlink account
export function unlink(provider) {
  return (dispatch) => {
    return fetch('/unlink/' + provider).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          dispatch({
            type: 'UNLINK_SUCCESS',
            messages: [json]
          });
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: 'UNLINK_FAILURE',
            messages: [json]
          });
        });
      }
    });
  }
}

function oauth2(config, dispatch) {
  return new Promise((resolve, reject) => {
    const params = {
      client_id: config.client_id,
      redirect_uri: config.redirect_uri,
      response_type: config.response_type
    };
    const url = config.authorizationUrl + '?' + qs.stringify(params);
    resolve({ url: url, config: config, dispatch: dispatch });
  });
}

function oauth1(config, dispatch) {
  return new Promise((resolve, reject) => {
    resolve({ url: 'about:blank', config: config, dispatch: dispatch });
  });
}

function fetchDBAuthorise({ url, config, dispatch }) {
  console.log('requesting', url)
  return new Promise((resolve, reject) => {
    return fetch(url, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      if (response.ok) {
        console.log('ALL OK', url, response)
        return response.json().then((json) => {
          resolve({ window: window, config: config, requestToken: json, dispatch: dispatch });
        });
      }
    })
    .catch(console.error);
  });

}

function openPopup({ url, config, dispatch }) {
  return new Promise((resolve, reject) => {
    const width = config.width || 500;
    const height = config.height || 500;
    const options = {
      width: width,
      height: height,
      top: window.screenY + ((window.outerHeight - height) / 2.5),
      left: window.screenX + ((window.outerWidth - width) / 2)
    };
    const popup = window.open(url, '_blank', qs.stringify(options, ','));

    if (url === 'about:blank') {
      popup.document.body.innerHTML = 'Loading...';
    }

    resolve({ window: popup, config: config, dispatch: dispatch });
  });
}

function getRequestToken({ window, config, dispatch }) {
  return new Promise((resolve, reject) => {
    return fetch(config.url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        redirectUri: config.redirect_uri
      })
    }).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          resolve({ window: window, config: config, requestToken: json, dispatch: dispatch });
        });
      }
    });
  });
}

function pollPopup({ window, config, requestToken, dispatch }) {
  return new Promise((resolve, reject) => {
    const redirectUri = url.parse(config.redirect_uri);
    const redirectUriPath = redirectUri.host + redirectUri.pathname;

    if (requestToken) {
      window.location = config.authorizationUrl + '?' + qs.stringify(requestToken);
    }

    const polling = setInterval(() => {
      if (!window || window.closed) {
        clearInterval(polling);
      }
      try {
        const popupUrlPath = window.location.host + window.location.pathname;
        if (popupUrlPath === redirectUriPath) {
          if (window.location.search || window.location.hash) {
            const query = qs.parse(window.location.search.substring(1).replace(/\/$/, ''));
            const hash = qs.parse(window.location.hash.substring(1).replace(/[\/$]/, ''));
            const params = Object.assign({}, query, hash);

            if (params.error) {
              dispatch({
                type: 'OAUTH_FAILURE',
                messages: [{ msg: params.error }]
              });
            } else {
              resolve({ oauthData: params, config: config, window: window, interval: polling, dispatch: dispatch });
            }
          } else {
            dispatch({
              type: 'OAUTH_FAILURE',
              messages: [{ msg: 'OAuth redirect has occurred but no query or hash parameters were found.' }]
            });
          }
        }
      } catch (error) {
        // Ignore DOMException: Blocked a frame with origin from accessing a cross-origin frame.
        // A hack to get around same-origin security policy errors in Internet Explorer.
      }
    }, 500);
  });
}

function exchangeCodeForToken({ oauthData, config, window, interval, dispatch }) {
  return new Promise((resolve, reject) => {
    const data = Object.assign({}, oauthData, config);

    return fetch(config.url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin', // By default, fetch won't send any cookies to the server
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          resolve({ token: json.token, user: json.user, window: window, interval: interval, dispatch: dispatch });
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: 'OAUTH_FAILURE',
            messages: Array.isArray(json) ? json : [json]
          });
          closePopup({ window: window, interval: interval });
        });
      }
    });
  });
}

function signIn({ token, user, window, interval, dispatch }) {
  return new Promise((resolve, reject) => {
    console.log(token, user)
    dispatch({
      type: 'OAUTH_SUCCESS',
      token: token,
      user: user
    });
    cookie.save('token', token, { expires: moment().add(1, 'hour').toDate() });
    browserHistory.push('/');
    resolve({ window: window, interval: interval });
  });

}


function closePopup({ window, interval }) {
  return new Promise((resolve, reject) => {
    clearInterval(interval);
    window.close();
    resolve();
  });
}

export function dbLogin() {
  const dbConfig = {
    authorizationUrl: 'https://simulator-api.db.com/gw/oidc/authorize',
    client_id: '0d738e7c-b323-47cb-b77c-f56496250795',
    redirect_uri: 'http://localhost:3000/oauth',
    response_type: 'code',
    width: 580,
    height: 400
  };
  console.log(dbConfig)

  return (dispatch) => {
    oauth2(dbConfig, dispatch)
      .then(openPopup)
      .then(pollPopup)
      .then(exchangeCodeForToken)
      .then(signIn)
      .then(closePopup);
  };
}

