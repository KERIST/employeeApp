import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'react-router-redux';
import { ApplicationState } from './store';
import { fetchData, changeFilter } from './actions/actions';
import store, { history } from './store';

import { Route, Link, Switch } from 'react-router-dom';

import App from './containers/App';

import 'semantic-ui-css/semantic.css';
require('./styles/style.scss');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
        <App />
    </ConnectedRouter >
  </Provider>,
  document.getElementById('app')
);