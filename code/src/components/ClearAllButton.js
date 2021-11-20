import React from 'react';
import todos from "../reducers/todos";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ClearButtonContainer = styled.section`
display:flex;
justify-content: center;
padding: 10px 0;
background-color: white;
`;

const ClearButton = styled.button`
background-color: #000046;
margin: 20px 0 0 20px;
border:none;
border-radius: 8px 0 8px 0;
height: 40px;
width: 200px;
font-weight: 600;
font-size: 23px;
padding:0;
color: white;
box-shadow: 3px 3px #1CB5E0;
font-family: 'Gaegu', cursive;
`;


const ClearAllButton = () => {
  //Get correct item from store based on index
  const dispatch = useDispatch();

  const items = useSelector((store) => store.todos.items);
  const activeTodos = items.length;
  const noTodosLeft = activeTodos === 0;

  // calling clearAllTodos with dispatch 
  const clearAllTodos = () => {
    dispatch(todos.actions.clearAllTodos());
    localStorage.clear();
  };

  //When todos is shown  "Clear all todos button" is visible
  return (
    <>
      {noTodosLeft === false &&
        <ClearButtonContainer>
          <ClearButton onClick={clearAllTodos}>
            Clear all todos <FontAwesomeIcon icon={faTrashAlt} />
          </ClearButton>
        </ClearButtonContainer>
      }
    </>
  )
};

export default ClearAllButton;