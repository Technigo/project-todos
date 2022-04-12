import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import todos from "../reducers/todos.js";

const TodoTags = ({ tags }) => {
    
    return (
        <div className="todo-item-tags">
            <h3>TAGS:</h3>
            <p>
                {tags.map((tag) => (
                    <span key={tag} className="todo-item-tag">{tag}</span>
                ))}
            </p>
        </div>
    );
}

export default TodoTags;