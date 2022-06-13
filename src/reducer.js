import {combineReducers} from "redux";
import todoReducer from './fetures/todos/todosSlice';
import filterReducer from "./fetures/filter/filterReducer";
const combineReducer = combineReducers({
    todos:todoReducer,
    filters:filterReducer
});

export default combineReducer;

