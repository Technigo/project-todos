import React from 'react';
import todos from "../reducers/todos";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const ClearButtonContainer = styled.section`
	display:flex;
	justify-content: center;
	padding: 10px 0;
`;

const ClearButton = styled.button`
	width: 100px;
	border: none;
	background-color: red;
	color: white;
	border-radius: 5px;
	padding: 10px;
	font-family: "Montserrat"
	font-weight: bold;

	:hover {
		background-color: blue;
	}
`;


const ClearAllButton = () => {
	  //Get correct item from store based on index
	  const dispatch = useDispatch();

	  // calling clearAllTodos with dispatch 
	  const clearAllTodos = () => {
		dispatch(todos.actions.clearAllTodos());
	  };

	return (
		<ClearButtonContainer>
			<ClearButton onClick={clearAllTodos}>
				CLEAR ALL
			</ClearButton>
		</ClearButtonContainer>
	)
};

export default ClearAllButton; 