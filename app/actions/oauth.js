import url from 'url';
import qs from 'querystring';
import moment from 'moment';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';

 // window.addEventListener('message', function(event) {
 //   signIn(event.data);
 // }, false);

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
    resolve({ url: url, config: config, dispatch });
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
          resolve({ config: config, requestToken: json, dispatch: dispatch });
        });
      }
    })
    .catch(console.error);
  });

}

function openPopup({ url, config, dispatch }) {
  //const fetchUrl = url + qs.stringify(config, '&');
  //console.log(fetchUrl)
  //window.location= fetchUrl;
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

    console.log('resolving open')
    resolve({ config: config, dispatch: dispatch, popup });
  });
}

function signIn(response) {
  console.log('in signin', response)
  const { token, user } = response;
  return new Promise((resolve, reject) => {
    console.log(token, user, 'signing in')
    window.store.dispatch({
      type: 'OAUTH_SUCCESS',
      token: token,
      user: user
    });
    cookie.save('token', token, { expires: moment().add(1, 'hour').toDate() });
    browserHistory.push('/');
    //resolve({ popup, interval: interval });
  });

}


//function closePopup({ popup, interval }) {
//  return new Promise((resolve, reject) => {
//    clearInterval(interval);
//    console.log('attempt to close window');
//    popup.close();
//    resolve();
//  });
//}

export function dbLogin() {
  const dbConfig = {
    authorizationUrl: 'https://simulator-api.db.com/gw/oidc/authorize',
    client_id: '0d738e7c-b323-47cb-b77c-f56496250795',
    redirect_uri: 'http://localhost:3000/oauth',
    response_type: 'code',
  };
  console.log(dbConfig)

  return (dispatch) => {
    oauth2(dbConfig, dispatch)
      .then(openPopup)
    //.then(signIn)
    //.then(closePopup);
  };
}

