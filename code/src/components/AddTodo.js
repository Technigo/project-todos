import React, { useState} from 'react';
import styled from "styled-components";
// in order to send data nad update the store we need useDispatch
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';

// slice 
import todos from '../reducers/todos';

const AddTodoContainer = styled.section`
	text-align: center;
	margin: 30px auto;

	gap:10px;
`; 

const Input = styled.input`
	border: none;
	margin: 20px auto;
	padding: 7px;
	background-color: transparent;
	border-bottom: 2px solid rgb(170, 170, 170);
	font-size: 20px;

	::placeholder {
		font-family: "Roboto",-apple-system;
	}
`;

const AddButton = styled.button`
	background-color: green;
	margin: 20px auto;
	border:none;
	border-radius: 5px;
	height: 40px;
	width: 50px;

	font-size:20px;
	color:white;

	i:hover {
		width: 26px;
  		transform: scale(1.09);
	}
`;

const SelectContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const Select = styled.select`
  width: 100%;
  height: 35px;
  color: black;
`;

const AddTodo = () => {

	const [input, setInput] = useState('');
	const [ category, setCategory ] = useState("")
	console.log(category)

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
			<SelectContainer>
				<Select value={category} onChange={(event) => setCategory(event.target.value)} required>
				  <option value="">Select category...</option>
                  <option value="Work">Work</option> 
				  <option value="Studies">Studies</option>
				  <option value="Family & Friends">Family & Friends</option>
				  <option value="Health">Health</option>
				  <option value="Other">Other</option>
				</Select>
			</SelectContainer>
			<AddButton onClick={onAddTodo} disabled={input === ""}>
				<i className="fas fa-plus"></i>
			</AddButton>
		</AddTodoContainer>
		</>
	)
};

export default AddTodo;