import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import AllTasks from './AllTasks';

import task from '../reducers/task';

// Styled components
const StyledTaskDiv = styled.div`
	width: 80%;
	margin: 20px auto;
	padding: 20px;
	font-size: 18px;
	font-weight: bold;
	color: #003b49;
	background: rgba(255, 255, 255, 0.4);
	border-radius: 25px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (min-width: 768px) {
		font-size: 24px;
	}
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
	}
`;

const StyledButton = styled.button`
	border: none;
	background: none;
`;

const DeleteImage = styled.img`
	content: url('https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-trash-bin-cleaning-kiranshastry-lineal-kiranshastry.png');
	height: 35px;
	width: 35px;
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
		<section>
			{/* Incomplete tasks */}

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

			{/* Completed tasks */}
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
		</section>
	);
};

export default TaskList;
