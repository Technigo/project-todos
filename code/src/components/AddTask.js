import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import task from '../reducers/task';

// Styled Components
const StyledAddTaskContainer = styled.div`
	height: 100px;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-evenly;

	input {
		height: 24px;
		width: 60%;
		margin: auto 0;
		padding: 5px;
		border: 3px solid white;
		border-radius: 5px;

		&:focus {
			border: 3px solid hotpink;
			outline: none;
		}

		@media (min-width: 768px) {
			height: 30px;
			width: 50%;
			font-size: 24px;
		}
	}
`;

const StyledButton = styled.button`
	margin: auto 0;
	padding: 10px;
	border: 2px solid white;
	border-radius: 20px;
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;

	&:enabled {
		border: 2px solid hotpink;
	}
`;

const AddTask = () => {
	const [input, setInput] = useState('');
	const dispatch = useDispatch();

	const onAddTask = () => {
		dispatch(task.actions.addTask(input));
	};

	return (
		<StyledAddTaskContainer>
			<input
				type='text'
				placeholder='Add Task Here'
				value={input}
				onChange={(event) => setInput(event.target.value)}
			/>
			<StyledButton
				type='submit'
				onClick={onAddTask}
				disabled={input.length < 1}>
				<span role='img' aria-label='Plus sign'>
					➕
				</span>
			</StyledButton>
		</StyledAddTaskContainer>
	);
};

export default AddTask;
