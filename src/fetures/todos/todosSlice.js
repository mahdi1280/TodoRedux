const todos = {
    entities: {
        1: {id: 1, text: "task1", completed: true, color: 'red'},
        2: {id: 2, text: "task2", completed: true, color: 'red'},
        3: {id: 3, text: "task3", completed: true, color: 'red'},
        4: {id: 4, text: "task4", completed: true, color: 'red'},
    }
}
let id=5;

export default function todoReducer(state = todos, action) {
    switch (action.type) {
        case "todos/added":
            const todo = action.payload;
            return {
                ...state,
                entities: {
                    ...state.entities,
                    [todo.id]: todo
                }
            }
        case "todos/toggled":
            const todoToggledId = action.payload;
            const currentTodo = state.entities[todoToggledId];

            return {
                ...state,
                entities:{
                    ...state.entities,
                    [todoToggledId] : {
                        ...currentTodo,
                        completed : !currentTodo.completed
                    }
                }
            }
        case "todos/delete":
            const todoEntities = {...state.entities};
            delete todoEntities[action.payload];
            return {
                ...state,
                entities:todoEntities
            }
        default:
            return state;
    }
}

export const todosAdded = (text) => {
    return {
        type: "todos/added",
        payload: {id: id++, text: text, completed: false}
    }
}

export const selectedTodos = (state) => {
    return state.todos.entities;
}

export const changeToggled=(id)=>{
    return {
        type: "todos/toggled",
        payload:id
    }
}

export const deletedTodos=(id)=>{
    return {
        type:"todos/delete",
        payload: id
    }
}