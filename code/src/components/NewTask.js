import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { todoStore } from '../reducers/todoStore';

const StyledForm = styled.form`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
const StyledInput = styled.input`
	width: 200px;
	border: 1px solid black;
	box-shadow: none;
`;
const FormButton = styled.button`
	box-shadow: none;
	font-size: 40px;
	color: green;
	background: none;
	border: none;
`;

export const NewTask = () => {
	const dispatch = useDispatch();
	const [ taskInput, setTaskInput ] = useState('');

	const handleNewTask = (event) => {
		event.preventDefault();
		dispatch(todoStore.actions.createTask({ task: taskInput }));
		setTaskInput('');
	};
	//What is the smallest screen size you design for 320px
	return (
		<StyledForm onSubmit={handleNewTask}>
			<StyledInput type="text" onChange={(e) => setTaskInput(e.target.value)} value={taskInput} />
			<FormButton type="submit" aria-label="add">
				+
			</FormButton>
		</StyledForm>
	);
};

//Add a due date to a task
