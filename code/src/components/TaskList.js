import React from 'react';
import { useSelector } from 'react-redux';

import Header from './Header';
import AddTask from './AddTask';
import TaskItem from './TaskItem';

const TaskList = () => {
	const list = useSelector((store) => store.tasks.list);

	return (
		<>
			<Header />
			<div className='container'>
				<div className='list-container'>
					{list.items.map((item, index) => (
						<TaskItem key={index} itemIndex={index} />
					))}
				</div>
				<AddTask />
			</div>
		</>
	);
};

export default TaskList;
