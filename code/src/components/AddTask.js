import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import task from '../reducers/task';

// Styled Components
const StyledAddTaskContainer = styled.div`
display: flex;
justify-content: space-between;
margin-left: 5px;
`

const AddTask = () => {
	const [input, setInput] = useState('');
	const dispatch = useDispatch();

	const onAddTask = () => {
		dispatch(task.actions.addTask(input));
	};

	return (
		<StyledAddTaskContainer>
			<input
				type='text'
				value={input}
				onChange={event => setInput(event.target.value)}
			/>
			&nbsp; <button onClick={onAddTask}>Add Task</button>
		</StyledAddTaskContainer>
	);
};

export default AddTask;
