import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import todos from "../reducers/todos.js";

const TodoAdd = () => {

    return (
        <div className="todo-add-new-todo">
            <label>
                Title
                <input 
                type="text" 
                />
            </label>
            <label>
                What to do?
                <textarea 
                rows="4"
                cols="50" 
                />
            </label>
        </div>
    );
}

export default TodoAdd;