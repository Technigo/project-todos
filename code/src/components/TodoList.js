import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import TodoItem from './TodoItem.js';
import todos from "../reducers/todos.js";

const TodoList = () => {
    const todoList = useSelector((store) => store.todos.items);
    console.log(todoList);  
    
    const dispatch = useDispatch();
    
    return (
        <div className="todo-list container">
            {todoList.map((todo) => (
                <TodoItem  key={todo.id} todo={todo}/>
            ))}
        </div>
    );
}

export default TodoList;