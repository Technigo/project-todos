import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import todos from '../reducers/todos'; //slice imported

const AddTodo = () => { //pass anonymus function
	const [input, setInput] = useState(''); //our state property. We use setInput function in order to update the State.


	const dispatch = useDispatch(); //

	const onAddTodo = () => { //function for add a to do
		dispatch(todos.actions.addTodo(input)); //here we dispatch our action
	};

	return (
		<div>
			<input
				type="text"
				value={input}
				onChange={(event) => setInput(event.target.value)}
			/>
			<button onClick={onAddTodo}>Add todo</button> 
		</div>
	);
};

export default AddTodo;
