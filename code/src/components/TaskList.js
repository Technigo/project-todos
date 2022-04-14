import React from 'react';
import { useSelector } from 'react-redux';

import Header from './Header';
import AddTask from './AddTask';
import TaskItem from './TaskItem';
import TaskCount from './TaskCount';

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
			<TaskCount />
		</>
	);
};

export default TaskList;
