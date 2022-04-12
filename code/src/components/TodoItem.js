import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import todos from "../reducers/todos.js";
import TodoCompleted from "./TodoCompleted.js";

const TodoItem = ({ todo }) => {
    
    return (
        <div className="todo-item">
            <h2>
                TO DO: {todo.title}
            </h2>
            <p>
                {todo.whatToDo}
            </p>
            <h3>TAGS:</h3>
            <p>
                {todo.tags}
            </p>
            <TodoCompleted todo={todo} />
        </div>
    );
}

export default TodoItem;