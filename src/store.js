import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer";

const preLoadState = {
    todos: {
        entities: {
            1: {id: 1, text: "task1", completed: true, color: 'red'},
            2: {id: 2, text: "task2", completed: true, color: 'red'},
            3: {id: 3, text: "task3", completed: true, color: 'red'},
            4: {id: 4, text: "task4", completed: true, color: 'red'},
        }
    }
}


const print1= args=>next=>action=>{
    next(action);
}

const print2= args=>next=>action=>{
    next(action);
}

const store = createStore(reducer, preLoadState,applyMiddleware(print1,print2));

export default store;