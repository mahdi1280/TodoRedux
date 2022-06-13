import {combineReducers} from "redux";
import todoReducer from './fetures/todos/todosSlice';

const combineReducer = combineReducers({
    todos:todoReducer
});

export default combineReducer;

