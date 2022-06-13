import React from "react";
import TodoListItem from "./TodoListItem";
import {shallowEqual, useSelector} from "react-redux";
import {selectedTodosIds} from './todosSlice';

const TodoList=()=>{
    const todos=useSelector(selectedTodosIds,shallowEqual);
    const renderedListItems=todos.map((todoId)=>{
        return <TodoListItem key={todoId} todoId={todoId}/>
    })

    return <ul className={"todo-list"}>
        {renderedListItems}
    </ul>
}

export default TodoList;