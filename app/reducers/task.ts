import { handleActions } from "redux-actions";

import Action from "../actions/action";

import {
    FETCHED_TASKS,
    FETCHING_TASKS,
    FETCHED_TASK,
    FETCHING_TASK
} from '../constants/task';

import { Task} from '../models/model';
import { State} from '../models/state';

const initalState: State<Task> = {
  items: [],
  isFetching: false,
  currentItem: null
};

export default handleActions({
  [FETCHING_TASKS]: function (state: State<Task>, action: Action<Task>) {
    return {
      ...state,
      isFetching: true
    };
  },
  [FETCHING_TASK]: function (state: State<Task>, action: Action<Task>) {
    return {
      ...state,
      isFetching: true
    };
  },
  [FETCHED_TASK]: function (state: State<Task>, action: Action<Task>) {
    return {
      ...state,
      isFetching: false,
      currentItem: action.payload
    };
  },  
  [FETCHED_TASKS]: function (state: State<Task>, action: Action<Array<Task>>) {
    return {
      ...state,
      isFetching: false,
      items: action.payload
    };
  },  
}, initalState);
