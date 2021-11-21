import React from 'react';
import { useSelector } from 'react-redux';
import ConfettiRain from './Confetti';
// import styled from 'styled-components';

const AllTasks = () => {
	const tasksInList = useSelector((store) => store.task.items.length);

	const tasksToDo = useSelector(
		(store) => store.task.items.filter((item) => !item.isComplete).length
	);

	return (
		<div>
			{tasksToDo >= 1 ? (
				<p>
					{tasksToDo}/{tasksInList} to do
				</p>
			) : tasksInList >= 1 ? (
				<>
					<p>You've completed all you're tasks!</p>
					<ConfettiRain />
				</>
			) : (
				<p>Add a task to do</p>
			)}
		</div>
	);
};

export default AllTasks;
