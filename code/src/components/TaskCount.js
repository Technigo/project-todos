import React from 'react';
import { useSelector } from 'react-redux';

const TaskCount = () => {
	const list = useSelector((store) => store.tasks.list);
	const finishedTodos = list.items.filter((item) => item.isComplete).length;

	return (
		<div className='counter'>
			<p>
				Completed tasks: {finishedTodos} of {list.items.length}
			</p>
		</div>
	);
};

export default TaskCount;
