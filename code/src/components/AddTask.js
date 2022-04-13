import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import tasks from 'reducers/tasks';

const AddTask = () => {
	const dispatch = useDispatch();

	const [inputText, setInputText] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch(
			tasks.actions.addTask({
				text: inputText,
				isDone: false,
			})
		);

		setInputText('');
	};

	return (
		<form>
			<input
				type='text'
				placeholder='Add a Task'
				onChange={(event) => setInputText(event.target.value)}
				value={inputText}
				required
			/>
			<button type='submit'>Add Task</button>
		</form>
	);
};

export default AddTask;
