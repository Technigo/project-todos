import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { todoStore } from '../reducers/todoStore';
import { StyledSection, SectionHeader, Paragraf, ColorButton } from '../shared/shared';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`;
const Wrapper = styled.div`
	width: ${(props) => props.width}px;
	display: flex;
	flex: auto;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const StyledInput = styled.input`
	width: ${(props) => props.width * 0.8}px;
	height: ${(props) => (props.width < 500 ? 60 : 40)}px;
	border: 1px solid black;
	background-color: #c7d3d4;
	box-shadow: none;
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
	const theWidth = useSelector((state) => state.size.screenSize);

	const handleNewTask = (event) => {
		event.preventDefault();
		dispatch(todoStore.actions.createTask({ task: taskInput, dueDate: startDate }));
		console.log('date', startDate);
		setTaskInput('');
	};
	//What is the smallest screen size you design for 320px
	return (
		<StyledSection>
			<SectionHeader width={theWidth}>Make a new Todo</SectionHeader>
			<StyledForm onSubmit={handleNewTask}>
				<label for="todoInput">
					<Paragraf> Write the task</Paragraf>
				</label>
				<Wrapper width={theWidth}>
					<StyledInput
						width={theWidth}
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
