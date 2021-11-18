import React from 'react';
import todos from "../reducers/todos";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const ClearButtonContainer = styled.section`
	display:flex;
	justify-content: center;
	padding: 10px 0;
	background-color: white;
`;

const ClearButton = styled.button`
	width: 120px;
	height: 40px;
	border: none;
	background-color: red;
	color: white;
	border-radius: 5px;
	padding: 10px;
	font-family: "Roboto",-apple-system;
	font-weight: bold;
`;


const ClearAllButton = () => {
	  //Get correct item from store based on index
	  const dispatch = useDispatch();

	  // calling clearAllTodos with dispatch 
	  const clearAllTodos = () => {
		dispatch(todos.actions.clearAllTodos());
		localStorage.clear();
	  };

	return (
		<ClearButtonContainer>
			<ClearButton onClick={clearAllTodos}>
				CLEAR ALL <i className="fas fa-trash"></i>
			</ClearButton>
		</ClearButtonContainer>
	)
};

export default ClearAllButton; 