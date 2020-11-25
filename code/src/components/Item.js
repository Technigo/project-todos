import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { todos } from '../reducers/todos';

const ItemContainer = styled.div`
	background-color: grey;
`;

const CheckBox = styled.input`
	color: red;
`;

export const Item = ({ id, text, isCompleted }) => {
	const dispatch = useDispatch();
	const [completed, setCompleted] = useState(false);
	const handleCheckbox = (id) => {
		dispatch(todos.actions.toggleCompleted(id));
	};
	const handleDeleteItem = (id) => {
		dispatch(todos.actions.removeItem(id));
	};
	return (
		<ItemContainer>
			<p>{text}</p>

			<CheckBox
				type="checkbox"
				checked={completed}
				onChange={(e) => {
					setCompleted(e.target.checked);
					handleCheckbox(id);
				}}
			/>
			<p>{completed ? 'Done' : 'Not done'}</p>
			<button onClick={() => handleDeleteItem(id)}>Delete</button>
		</ItemContainer>
	);
};
