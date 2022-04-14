import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';


import TodoItem from './TodoItem.js';

const TodoCounter = styled.p `
    border-bottom: 5px solid black;
    margin: 0 0 15px 0;
    padding: 5px 0;
    background-color: #ccc;

`

const TodoList = () => {
    const todoList = useSelector((store) => store.todos.items);
    const numberOfTodos = todoList.length;
    const completedTodos = todoList.filter((todo) => {
        return todo.isCompleted === true;
    });
        
    return (
        <div className="todo-list container">
            <TodoCounter>You have completed {completedTodos.length} of {numberOfTodos} todos.</TodoCounter>

            {todoList.map((todo, index) => (
                <TodoItem index={index} key={todo.id} todo={todo}/>
            ))}
        </div>
    );
}

export default TodoList;