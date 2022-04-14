import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import todos from '../reducers/todos';

const AddTodo = () => {
	const [input, setInput] = useState('');

	const dispatch = useDispatch();

	const onAddTodo = () => {
		dispatch(todos.actions.addTodo(input));
	};

	return (
		<div className='text'>
			New todo: &nbsp;
			<input
				type='text'
				value={input}
				className='placeholder'
				onChange={(event) => setInput(event.target.value)}
			/>
			&nbsp;
			<button className='button' onClick={onAddTodo}>
				Add
			</button>
		</div>
	);
};

export default AddTodo;
