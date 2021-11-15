import React, { useState} from 'react';
// in order to send data nad update the store we need useDispatch
import { useDispatch } from 'react-redux';

import todos from '../reducers/todos'

const AddTodo = () => {

	const [input, setInput] = useState('')

	const dispatch = useDispatch();

	const onAddTodo = () => {
		// callinling action addTodo from the reducer
		dispatch(todos.actions.addTodo(input))
	};

	return (
		<div>
			<input 
				type="text" 
				value={input} 
				onChange={(event) => setInput(event.target.value)} />
			<button onClick={onAddTodo}>Add</button>
		</div>
	)
};

export default AddTodo;