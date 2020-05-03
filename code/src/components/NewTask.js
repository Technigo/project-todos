import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { todoStore } from '../reducers/todoStore';
import { StyledSection, SectionHeader, Paragraf, ColorButton } from '../shared/shared';

// Styled components
const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`;
const Wrapper = styled.div`
	display: flex;
	flex: auto;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const StyledInput = styled.input`
  width: 70%;
  height: 48px;
	border: 1px solid black;
	background-color: #c7d3d4;
	box-shadow: none;
    @media (min-width: 576px) {
    height: 32px;
  }
`;

const DateInput = styled.input`
	width: 200px;
	background-color: #c7d3d4;
	border: 1px solid black;
	height: 32px;
	margin-bottom: 16px;
`;

export const NewTask = () => {
	const dispatch = useDispatch();
	const [ taskInput, setTaskInput ] = useState('');
	const [ startDate, setStartDate ] = useState(new Date());


	const handleNewTask = (event) => {
		event.preventDefault();
		dispatch(todoStore.actions.createTask({ task: taskInput, dueDate: startDate }));
		console.log('date', startDate);
		setTaskInput('');
	};

	return (
		<StyledSection>
			<SectionHeader>Make a new Todo</SectionHeader>
			<StyledForm onSubmit={handleNewTask}>
				<label for="todoInput">
					<Paragraf> Write the task</Paragraf>
				</label>
				<Wrapper>
					<StyledInput
						type="text"
						name="todoInput"
						onChange={(e) => setTaskInput(e.target.value)}
						value={taskInput}
					/>
					<ColorButton color="green" type="submit" aria-label="add">
						+
					</ColorButton>
				</Wrapper>

				<label for="start">
					<Paragraf>Pick a due date</Paragraf>
				</label>
				<DateInput
					type="date"
					id="start"
					name="start"
					onChange={(e) => setStartDate(e.target.value)}
					value={startDate}
				/>
			</StyledForm>
		</StyledSection>
	);
};
