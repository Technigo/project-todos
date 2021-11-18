import React, { useState} from 'react';
// in order to send data nad update the store we need useDispatch
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
// slice 
import todos from '../reducers/todos';
// styling 
import {
	AddTodoContainer, 
	Input, 
	AddButton, 
	Select
} from '../styled-components/AddTodoStyling'

const AddTodo = () => {

	const [input, setInput] = useState('');
	const [ category, setCategory ] = useState("")

	const dispatch = useDispatch();

	const onAddTodo = () => {
		// callinling action addTodo from the reducer
		dispatch(todos.actions.addTodo({
			id: uniqid(),
			text: input,
			category: category,
			// need this to trigger todos if there are completed or not
			isComplete: false, 
		}));
		// setting input field to an empty string
		setInput("");
		setCategory("");
	};

	return (
		<>
		<AddTodoContainer>
			<Input 
				type="text" 
				placeholder="Add todo here..."
				value={input} 
				onChange={(event) => setInput(event.target.value)} />
			<div>
				<Select value={category} onChange={(event) => setCategory(event.target.value)} required>
				  <option value="">Select category...</option>
          <option value="Work">Work</option> 
				  <option value="Studies">Studies</option>
				  <option value="Family & Friends">Family & Friends</option>
				  <option value="Health">Health</option>
				  <option value="Other">Other</option>
				</Select>
			</div>
			<AddButton onClick={onAddTodo} disabled={input === ""}>
				<i className="fas fa-plus"></i>
			</AddButton>
		</AddTodoContainer>
		</>
	)
};

export default AddTodo;