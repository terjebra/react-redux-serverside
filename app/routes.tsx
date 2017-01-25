import * as React from "react";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './containers/App';
import TaskContainer from './containers/TaskContainer'
import TasksContainer from './containers/TasksContainer'

export default (
    <Route path="/" component={App}>
        <Route path="/tasks" component={TasksContainer} />
        <Route path="/tasks/:id" component={TaskContainer} />
    </Route>
);