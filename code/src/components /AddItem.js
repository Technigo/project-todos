import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { addToDo } from '../features/todo'; //original idea is to import this action, and use in dispatch, and to access the payload when onSubmit
import styled from 'styled-components';

const AddItem = () => {
	const todo = useSelector((state) => state.todo.value);
	const dispatch = useDispatch();
	const [text, setText] = useState('');

	const onFormSubmit = (e) => {
		e.preventDefault();

		const newTodo = {
			id: uniqid(),
			text: text,
			isComplete: false,
		};
		dispatch(todo.actions.addItem(newTodo));
		setText('');
	};

	return (
		<FormStyle>
			<div>
				<input
					type="text"
					placeholder="Complete your To Do List"
					autoComplete="off"
					value={text}
					maxLength="40"
					size="30"
					required
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<div className="btnContainer">
				<button type="submit" onSubmit={onFormSubmit}>
					Add to List
				</button>
			</div>
		</FormStyle>
	);
};

const FormStyle = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 10px 5px;
	padding: 5px;
	@media (min-width: 768px) {
		align-items: center;
	}

	.btnContainer {
		margin-top: 10px;
	}

	button {
		background-color: lightblue;
		border: none;
		border-radius: 25px;
		padding: 0.5rem;
		cursor: pointer;
		&:hover {
			opacity: 0.6;
		}
	}
`;

export default AddItem;
