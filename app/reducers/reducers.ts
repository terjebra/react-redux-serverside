import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import taskReducer from './task';
import {reducer as reduxAsyncConnect  } from 'redux-connect'

const reducer = combineReducers({
  routing: routerReducer,
  task: taskReducer,
  reduxAsyncConnect : reduxAsyncConnect 
});

export default reducer;