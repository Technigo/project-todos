import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import todos from '../reducers/todos';

const input = styled.input`
border-radius: 30px;
height: 400px;
margin-bottom: 15px;

`
const AddTodoBtn=styled.button`
border-radius: 50px;
`

const AddTodo = () => {
	const [input, setInput] = useState('');

	const dispatch = useDispatch();

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
			<button onClick={onAddTodo}>Add todo</button>
		</div>
	);
};

export default AddTodo;