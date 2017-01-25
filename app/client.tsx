import { createStore, combineReducers, applyMiddleware, compose, Store } from 'redux';
import * as React from "react";
import * as ReactDOM from "react-dom";
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import { routerMiddleware, syncHistoryWithStore} from 'react-router-redux';
import { ReduxAsyncConnect } from 'redux-connect';

import routes from './routes'
import reducers from './reducers/reducers';

interface Window { data: any; }

const data = window["__data"] || {};
const store = createStore(reducers, data, compose(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store} key="provider">
      <Router render={(props)=> <ReduxAsyncConnect {...props}/>} history={history} routes={routes}/>
  </Provider>,
  document.getElementById('content')
);