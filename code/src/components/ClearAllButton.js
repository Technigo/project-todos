import React from 'react';
import todos from "../reducers/todos";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

//Thank you Darya DALA746 for this!

const ClearButtonContainer = styled.section`
display:flex;
justify-content: center;
padding: 10px 0;
background-color: white;
`;

const ClearButton = styled.button`
background-color: #ffdde1;
margin: 20px 0 0 20px;
border:none;
border-radius: 8px 0 8px 0;
height: 40px;
width: 130px;
font-weight: 600;
font-size:18px;
color: black;
box-shadow: 3px 3px #ee9ca7;
font-family: 'Comic Neue', cursive;
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

	return (
    <>
    { noTodosLeft === false && 
		<ClearButtonContainer>
			<ClearButton onClick={clearAllTodos}>
			Clear all todos <i className="fas fa-trash"></i>
			</ClearButton>
		</ClearButtonContainer>
  }
  </>
	)
};

export default ClearAllButton; 