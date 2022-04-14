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
				isComplete: false,
			})
		);

		setInputText('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<button type='submit' className='add-btn'>
				<i class='fa-solid fa-plus'></i>
			</button>
			<input
				type='text'
				placeholder='Add a Task'
				onChange={(event) => setInputText(event.target.value)}
				value={inputText}
				required
			/>
		</form>
	);
};

export default AddTask;
