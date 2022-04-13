import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import todos from "../reducers/todos.js";

const TodoTags = ({ tags }) => {

    const Tags = styled.div `
        margin: 0 0 15px 0;

    `

    const Tag = styled.span`
        background-color: #ffff00;
        margin: 0 4px 0 0;
        padding: 2px 3px;
        font-size: 0.9rem;
        &:hover {
            cursor: pointer;
            background-color: #40e0d0;
        }
    `
    
    return (
        <Tags>
            {tags.map((tag) => (
                <Tag key={tag} className="todo-item-tag">{tag}</Tag>
            ))}
        </Tags>
    );
}

export default TodoTags;