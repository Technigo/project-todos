import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { todos } from '../reducers/todos';

const ItemContainer = styled.div`
	background-color: grey; ;
`;

const CheckBox = styled.input`
	color: red;
`;

export const Item = ({ id, text, isCompleted, timestamp }) => {
	const dispatch = useDispatch();
	const [completed, setCompleted] = useState(false);
	const handleCheckbox = (id) => {
		dispatch(todos.actions.toggleCompleted(id));
	};
	const handleDeleteItem = (id) => {
		dispatch(todos.actions.removeItem(id));
	};
	return (
		<ItemContainer style={{ opacity: `${isCompleted ? '0.3' : '1'} ` }}>
			<p>{text}</p>
			<p>{moment(timestamp).format('MMM Do YY')}</p>

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
