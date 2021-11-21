import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import AllTasks from './AllTasks';

import task from '../reducers/task';

// Styled components
const ListContainer = styled.section``;

const StyledButton = styled.button`
	border: none;
	background: none;
`;

const StyledTaskDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledCheckBox = styled.input`
	appearance: none;
	-webkit-appearance: none;
	position: relative;
	top: 1px;
	width: 27px;
	height: 27px;
	border: 1px solid #c8ccd4;
	border-radius: 3px;
	vertical-align: middle;
	transition: background 0.1s ease;
	cursor: pointer;
	display: block;
	border: 1px solid #003b49;
	border-radius: 25px;

	&:checked {
		background: lightgrey;
	}

	&:checked:after {
		content: url('https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png');
		position: absolute;
		font-size: 20px;
	}
`;

const DeleteImage = styled.img`
	content: url('https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-trash-bin-cleaning-kiranshastry-lineal-kiranshastry.png');
	height: 30px;
	width: 30px;
`;

const TaskList = () => {
	// fetch tasks from store
	const completedTasks = useSelector((store) =>
		store.task.items.filter((item) => item.isComplete)
	);

	// fetch incomplete tasks from store
	const incompleteTasks = useSelector((store) =>
		store.task.items.filter((item) => !item.isComplete)
	);

	const dispatch = useDispatch();

	const onToggleTask = (id) => {
		dispatch(task.actions.toggleTask(id));
	};

	const onDeleteTask = (id) => {
		dispatch(task.actions.deleteTask(id));
	};

	return (
		<ListContainer>
			<h1>Daily Tasks</h1>

			{incompleteTasks.map((item) => (
				<StyledTaskDiv key={item.id}>
					<StyledCheckBox
						type='checkbox'
						id='checkbox'
						checked={item.isComplete}
						onChange={() => onToggleTask(item.id)}
					/>

					<label htmlFor='checkbox'>
						<p>{item.text}</p>
					</label>
					<StyledButton onClick={() => onDeleteTask(item.id)}>
						<DeleteImage />
					</StyledButton>
				</StyledTaskDiv>
			))}

			{completedTasks.map((item) => (
				<StyledTaskDiv key={item.id}>
					<StyledCheckBox
						type='checkbox'
						id='completeCheckbox'
						checked={item.isComplete}
						onChange={() => onToggleTask(item.id)}
					/>
					<label htmlFor='completeCheckbox'>
						<p>{item.text}</p>
					</label>
					<StyledButton onClick={() => onDeleteTask(item.id)}>
						<DeleteImage />
					</StyledButton>
				</StyledTaskDiv>
			))}
			<AllTasks />
		</ListContainer>
	);
};

export default TaskList;
