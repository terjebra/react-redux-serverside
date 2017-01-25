import Action from './Action';
import { Task } from '../models/model';
import * as fetch from 'isomorphic-fetch';

import {
    FETCHED_TASKS,
    FETCHING_TASKS,
    FETCHED_TASK,
    FETCHING_TASK
} from '../constants/task';


const tasksUrl = "http://localhost:3012/tasks"

const fetchedTask = (task: Task): Action<Task> => {
    return {
        type: FETCHED_TASK,
        payload: task
    }
}

const fetchingTask = () : Action<void> => {
    return {
        type: FETCHING_TASKS,
        payload: null
    }
}

const fetchedTasks = (tasks: Array<Task>): Action<Array<Task>>  => {
    return {
        type: FETCHED_TASKS,
        payload: tasks
    }
}

const fetchingTasks = (): Action<void> => { 
    return {
        type: FETCHING_TASKS,
        payload: null
    }
}

export const fetchTask = (id: string) => {
    return dispatch => {
        dispatch(fetchingTask);
        return fetch(`${tasksUrl}/${id}`)
            .then(response => response.json())
            .then(json => dispatch(fetchedTask(
                {
                    id: json.id,
                    name: json.name
                })
            ))
    };
};

export const fetchTasks = () => {
    return dispatch => {
        dispatch(fetchingTasks);
        return fetch(`${tasksUrl}`)
            .then(response => response.json())
            .then(json => dispatch(fetchedTasks(
                json.map((item: any) => {
                    return {
                        id: item.id,
                        name: item.name
                    }
                })
            )));
    };
};

