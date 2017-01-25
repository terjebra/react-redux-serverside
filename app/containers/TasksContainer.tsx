import * as React from 'react';
import { connect } from "react-redux";
import { asyncConnect } from "redux-connect";
import { Task } from '../models/model';
import {State} from '../models/state';
import { fetchTasks} from '../actions/tasks';
import {Link} from 'react-router';

interface TasksProps {
  tasks: Array<Task>;
  fetchTasks: any;
  isFetching: boolean;
}

const mapStateToProps = (state, router) => {
  return {
    tasks: state.task.items,
    isFetching: state.task.isFetching,
  };
};

@asyncConnect([{
  promise: ({ store: { dispatch }, params}) => {
    return dispatch(fetchTasks());
  },
}])

@connect(mapStateToProps)
export default class TasksContainer extends React.Component<TasksProps, any> {
  constructor() {
    super();
    
  }

  render() {
    return (
      <div>
          {this.props.tasks.length > 0 ?
            <ul>
              {this.props.tasks.map((task: Task) => {
                return <li key={task.id}><Link to={`/tasks/${task.id}`}>{task.name}</Link></li>
              }) }
            </ul>
            : <div>Laster</div>
          }
      </div>
    );
  }
}