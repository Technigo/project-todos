import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { todoStore } from '../reducers/todoStore';

const TodoItem = styled.button`
	min-width: 200px;
	background-color: #c7d3d4;
	border: 1px solid black;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 25px;
	opacity: ${(props) => (props.todoDone ? 0.6 : 1)};
`;
const SmallText = styled.p`
	font-size: 14px;
	font-width: 100;
  
`;
const MediumText = styled.p`
	font-size: 18px;
	font-width: 100;
  text-decoration: ${props=>props.todoDone ? 'line-through' : 'none'};
`;
const ItemButton = styled.button`
	box-shadow: none;
	font-size: 40px;
	background: none;
	border: none;
	color: red;
`;

export const TaskItem = ({ todo }) => {
	const dispatch = useDispatch();

	const handleStatusChange = () => {
		dispatch(todoStore.actions.statusTask(todo));
	};
	const handleDelete = () => {
		dispatch(todoStore.actions.removeTask(todo));
	};

	return (
		<div>
			<TodoItem todoDone={todo.taskDone} onClick={handleStatusChange}>
				<MediumText todoDone={todo.taskDone}>{todo.task}</MediumText>
			</TodoItem>
			<ItemButton onClick={handleDelete} aria-label="remove">
				-
			</ItemButton>
		</div>
	);
};

//Add a due date to a task
//Task undone
// background: #C7D3D4;
// border: 1px solid #000000;
// box-sizing: border-box;
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// border-radius: 25px;

// Task-done
// background: rgba(199, 211, 212, 0.6);
// border: 1px solid rgba(0, 0, 0, 0.6);
// box-sizing: border-box;
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// border-radius: 25px;
