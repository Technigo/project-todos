import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import AddTask from './AddTask';

const TaskList = () => {
	const list = useSelector((store) => store.tasks.list);

	return (
		<main>
			<AddTask />
		</main>
	);
};

export default TaskList;
