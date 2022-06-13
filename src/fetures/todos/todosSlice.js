import produce from "immer";

const todos = {
    entities: {
        // 1: {id: 1, text: "task1", completed: true, color: 'red'},
        // 2: {id: 2, text: "task2", completed: true, color: 'red'},
        // 3: {id: 3, text: "task3", completed: true, color: 'red'},
        // 4: {id: 4, text: "task4", completed: true, color: 'red'},
    }
}
let id = 5;

const todoReducer = produce((state, action) => {
    switch (action.type) {
        case "todos/added":
            const todo = action.payload;
            state.entities[todo.id] = todo;
            break;
        case "todos/toggled":
            const todoToggledId = action.payload;
            state.entities[todoToggledId].completed = !state.entities[todoToggledId].completed
            break;
        case "todos/delete":
            delete state.entities[action.payload];
            break;
    }
}, todos);

export default todoReducer;

export const todosAdded = (text) => {
    return {
        type: "todos/added", payload: {id: id++, text: text, completed: false}
    }
}

export const selectedTodosIds = (state) => {
    return Object.keys(state.todos.entities);
}

export const selectedTodo = (state, id) => {
    return state.todos.entities[id];
}
export const changeToggled = (id) => {
    return {
        type: "todos/toggled", payload: id
    }
}

export const deletedTodos = (id) => {
    return {
        type: "todos/delete", payload: id
    }
}