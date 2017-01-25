import * as React from 'react';
import { connect } from "react-redux";
import { asyncConnect } from "redux-connect";
import { Task } from '../models/model';

import {State} from '../models/state'


import { fetchTask} from '../actions/tasks'


interface TaskProps {
  task: Task,
  fetchTask: any,
  isFetching: boolean;
}

const mapStateToProps = (state, router) => {
  return {
    task: state.task.currentItem,
    isFetching: state.task.isFetching,
  };
};


@asyncConnect([{
  promise: ({ store: { dispatch }, params}) => {
    return dispatch(fetchTask(params.id));
  },
}])

@connect(mapStateToProps)
export default class TaskContainer extends React.Component<TaskProps, any> {
  constructor() {
    super();
    
  }

  render() {
    return (
      <div>
        {
          this.props.task == null
          ? <div>Loading..</div>
          :
          <div>{this.props.task.id} - {this.props.task.name}</div>
        }
      </div>
    );
  }
}