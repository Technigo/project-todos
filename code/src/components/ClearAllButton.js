import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import  { todos }  from "../reducers/todos";

const Buttons = styled.div `
    display: flex;
    justify-content: center;
    margin: 10px;
`;

const DeleteAllTodo = styled.button `
    display: flex;
    justify-content: center;
    background:linear-gradient(25deg, #2BC0E4 0%, #EAECC6 100%);
    display:inline-block;
    padding:0.35em 1.2em;
    border:1px solid #FFFFFF;
    margin-top 20px;
    border-radius:5px;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:500;
    color:#fff;
    text-align:center;
`;

export const ClearAllButton = () => {
  const dispatch = useDispatch();
  
  const clearAllTodos = (event) => {
    dispatch(todos.actions.clearAll());
  };

  return (
    <Buttons>
        <DeleteAllTodo onClick={clearAllTodos}>
            Delete All
        </DeleteAllTodo>
    </Buttons>
  )
}