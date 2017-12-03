import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import getRoutes from './routes';

const store = configureStore(window.INITIAL_STATE);
window.addEventListener('message', function(event) {
  console.log(event.data);
  const { token, user } = event.data;
  store.dispatch({
    type: 'OAUTH_SUCCESS',
    token: token,
    user: {}
  });
  browserHistory.push('/');
}, false);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={getRoutes(store)}/>
  </Provider>,
  document.getElementById('app')
);
