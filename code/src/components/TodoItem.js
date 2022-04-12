import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import todos from "../reducers/todos.js";
import TodoTags from "./TodoTags.js";
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
            <TodoTags tags={todo.tags} />
            <TodoCompleted todo={todo} />
        </div>
    );
}

export default TodoItem;