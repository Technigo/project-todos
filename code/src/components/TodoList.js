import React from "react";
import { useSelector } from "react-redux";

import TodoItem from './TodoItem.js';

const TodoList = () => {
    const todoList = useSelector((store) => store.todos.items);
    console.log(todoList);  
        
    return (
        <div className="todo-list container">
            {todoList.map((todo, index) => (
                <TodoItem index={index} key={todo.id} todo={todo}/>
            ))}
        </div>
    );
}

export default TodoList;