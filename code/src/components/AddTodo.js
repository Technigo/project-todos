import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // import dispatch actions and trigger state changes to the store
import styled from 'styled-components';
import todos from '../reducers/todos';

const Addtasks = styled.div`
	margin: 0 auto;
	width: 95%;
`;

const Inputtext = styled.input`
	width: 80%;
	outline: none;
	resize: none;
	margin: 10px;
	border-radius: 10px;
	height: 40px;
	border-style: none;
	font-family: 'Poiret One', cursive;
	font-weight: 650;
	::placeholder {
		text-align: center;
	}
`;

const AddTodoBtn = styled.button`
	font-size: 20px;
	height: 30px;
	width: 30px;
	border-radius: 50%;
	border: none;
	color: black;
`;

const AddTodo = () => {
	const [input, setInput] = useState('');

	//dispatches actions and trigger state changes to the store
	const dispatch = useDispatch();

	const onAddTodo = () => {
		dispatch(todos.actions.addTodo(input));
		setInput(''); //Helps clear the input
	};
	return (
		<Addtasks>
			<Inputtext
				type="text"
				placeholder="Add your daily tasks"
				value={input}
				maxlength="25"
				minlength="5"
				onChange={(event) => setInput(event.target.value)}
			/>
			<AddTodoBtn onClick={onAddTodo}>+</AddTodoBtn>
		</Addtasks>
	);
};

export default AddTodo;
