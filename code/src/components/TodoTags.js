import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import todos from "../reducers/todos.js";

const TodoTags = ({ tags }) => {

    const Tag = styled.span`
        background-color: #40e0d0;
        margin: 0 10px 0 0;
        
    `
    
    return (
        <div className="todo-item-tags">
            {tags.map((tag) => (
                <Tag key={tag} className="todo-item-tag">{tag}</Tag>
            ))}
        </div>
    );
}

export default TodoTags;