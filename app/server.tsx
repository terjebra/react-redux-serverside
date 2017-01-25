import * as express from 'express';
import { match , Router} from 'react-router'
import { ReduxAsyncConnect, loadOnServer, reducer as reduxAsyncConnect } from 'redux-connect'

import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import Html from './Html';
import routes from './routes';
import * as ReactDOM from 'react-dom/server';
import * as React from "react";
import reducers from './reducers/reducers';
import thunk from 'redux-thunk';

import createHistory from 'history/lib/createMemoryHistory'

const app = express();
const port = 3011;

app.get('*', (req, res) => {

  const memoryHistory = createHistory(req.originalUrl);
  const store = createStore(reducers, compose(applyMiddleware(thunk)));
  const history = syncHistoryWithStore(memoryHistory, store);
  
   match({ history, routes: routes, location: req.originalUrl }, (error, redirectLocation, renderProps) => {
    
    if(error){
       res.status(500);
    }
    else if(renderProps){
      loadOnServer({ ...renderProps, store }).then(() => {

        const component = (
          <Provider store={store} key="provider">
            <Router render={(props)=> <ReduxAsyncConnect {...props}/>} history={history} routes={routes}/>
          </Provider>
        );

        res.status(200);
        res.send('<!doctype html>\n' +
          ReactDOM.renderToString(<Html component={component} store={store}/>));
      }).catch( (error) => {
        res.status(500);
      });
    }
    else{
        res.status(404).send('Not found');
    }
  })
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("Open up http://localhost:%s/ in your browser.", port)
  }
});