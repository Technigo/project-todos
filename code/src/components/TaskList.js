import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import AllTasks from './AllTasks';

import task from '../reducers/task';

// Styled components
const StyledTaskList = styled.section`

`

const StyledButton = styled.button`
right: 2px;
`

const StyledTaskDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const CheckBoxLabel = styled.label`
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

&:after {
	content: '';
	position: absolute;
	top: 2px;
	left: 8px;
	width: 7px;
	height: 14px;
	opacity: 0;
	transform: rotate(45deg) scale(0);
	border-right: 2px solid #fff;
	border-bottom: 2px solid #fff;
	transition: all 0.3s ease;
	transition-delay: 0.15s;
}
`

const StyledCheckBox = styled.input`

`


const TaskList = () => {
	// fetch tasks from store
	const currentTasks = useSelector((store) => store.task.items);

	const dispatch = useDispatch();

	const onToggleTask = (id) => {
		dispatch(task.actions.toggleTask(id))
	}

	const onDeleteTask = (id) => {
		dispatch(task.actions.deleteTask(id))
	}



	return (
		<StyledTaskList>
			<h1>Daily Tasks</h1>
			{currentTasks.map(item => 
				<StyledTaskDiv key={item.id}>
					<CheckBoxLabel>
						<StyledCheckBox type="checkbox" checked={item.isComplete} onChange={() => onToggleTask(item.id)} />
					</CheckBoxLabel>
					<p>{item.text}</p>
					<StyledButton onClick={() => onDeleteTask(item.id)}>Delete</StyledButton>
				</StyledTaskDiv>
				)}
			<AllTasks />

		</StyledTaskList>
	);
};

export default TaskList;