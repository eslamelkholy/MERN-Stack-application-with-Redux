import { createStore ,applyMiddleware, combineReducers} from 'redux';
import { defaultState } from '../components/defaultState';
import { createLogger } from 'redux-logger';
import  createSagaMiddleware  from 'redux-saga';
import * as sagas from './sagas.mock';
import { taskCreationSaga } from './sagas.mock';
import * as mutations from './mutation';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducers({
        tasks(tasks = defaultState.tasks, action){
            // eslint-disable-next-line default-case
            switch (action.type) {
                // Create New Task Handler
                case mutations.CREATE_TASK:
                    console.log(action);
                    return [...tasks, {
                        id: action.taskID,
                        name: "New Task",
                        group: action.groupID,
                        owner: action.ownerID,
                        isComplete: false
                    }]
                case mutations.SET_TASK_COMPLETE:
                    return tasks.map(task =>{
                        return (task.id === action.taskID) ? {...task, isComplete: action.isComplete} : task;
                    });
            }
            return tasks;
        },
        comments(comments = defaultState.comments){ return comments},
        groups(groups = defaultState.groups){ return groups},
        users(users = defaultState.comments){ return users},
    }),

    applyMiddleware(createLogger(), sagaMiddleware)
);
for(let saga in sagas){
    sagaMiddleware.run(taskCreationSaga)
}