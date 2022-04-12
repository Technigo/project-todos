import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import todos from "../reducers/todos.js";
import TodoTags from "./TodoTags.js";
import TodoCompleted from "./TodoCompleted.js";
import TodoDelete from "./TodoDelete.js";

const TodoItem = ({ todo }) => {

    const TodoItem = styled.div `
        border-bottom: 5px solid black;
        margin: 20px 0;
        padding: 0 0 20px 0;

    `
    const TodoItemHeading = styled.h2 `
        margin: 0 0 10px 0;
        padding: 0;
        font-size: 1rem;
        font-weight: 700;

    `

    const TodoItemDescription = styled.p `
        font-size: 1rem;
        padding: 0;
        margin: 0 0 20px 0;
    `
    
    return (
        <TodoItem>
            <TodoItemHeading>
                TO DO: {todo.title}
            </TodoItemHeading>
            <TodoItemDescription>
                {todo.whatToDo}
            </TodoItemDescription>
            <TodoTags tags={todo.tags} />
            <TodoCompleted todo={todo} />
            <TodoDelete todo={todo} />
        </TodoItem>
    );
}

export default TodoItem;