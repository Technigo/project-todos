import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import tasks from 'reducers/tasks';

const TaskItem = ({ itemIndex }) => {
	const item = useSelector((store) => store.tasks.list.items[itemIndex]);
	const dispatch = useDispatch();

	const handleCheckbox = () => {
		dispatch(
			tasks.actions.toggleDone({
				itemIndex: itemIndex,
				isComplete: !item.isComplete,
			})
		);
	};

	const handleDelete = () => {
		dispatch(
			tasks.actions.deleteTask({
				itemIndex: itemIndex,
			})
		);
	};

	return (
		<div id='task-list' className={`${item.isComplete ? 'complete' : ''}`}>
			<input
				type='checkbox'
				checked={item.isComplete}
				onChange={() => handleCheckbox(item.id)}
			/>
			<label>{item.text}</label>
			<button className='delete-btn' onClick={handleDelete}>
				<i class='fa-solid fa-trash-can'></i>
			</button>
		</div>
	);
};

export default TaskItem;
