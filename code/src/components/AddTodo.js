import React, { useState} from 'react';
// in order to send data nad update the store we need useDispatch
import { useDispatch } from 'react-redux';

import todos from '../reducers/todos'

const AddTodo = () => {

	const [input, setInput] = useState('')

	const dispatch = useDispatch();

	const onAddTodo = () => {
		// callinling action addTodo from the reducer
		dispatch(todos.actions.addTodo(input));
		// setting input field to an empty string
		setInput("");
	};

	return (
		<div>
			<input 
				type="text" 
				placeholder="Add todo here"
				value={input} 
				onChange={(event) => setInput(event.target.value)} />
			<button onClick={onAddTodo}>Add</button>
		</div>
	)
};

export default AddTodo;