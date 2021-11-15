import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // import dispatch actions and trigger state changes to the store

import todos from '../reducers/todos';

const AddTodo = () => {
	const [input, setInput] = useState('');

	const dispatch = useDispatch(); //dispatches actions and trigger state changes to the store

	const onAddTodo = () => {
		dispatch(todos.actions.addTodo(input));
	};
	return (
		<div>
			<input
				type="text"
				value={input}
				onChange={(event) => setInput(event.target.value)}
			/>
			<button onClick={onAddTodo}> Add Todo</button>
		</div>
	);
};

export default AddTodo;
