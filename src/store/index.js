import { createStore ,applyMiddleware} from 'redux';
import { defaultState } from '../components/defaultState';
import { createLogger } from 'redux-logger';


export const store = createStore(
    function reducer(state = defaultState, action){
        return state;
    },
    applyMiddleware(createLogger())
)