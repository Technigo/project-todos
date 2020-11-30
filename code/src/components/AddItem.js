import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { todos } from '../reducers/todos';

export const AddItem = () => {
	const [newItem, setNewItem] = useState('');
	const dispatch = useDispatch();
	const handleAddItem = () => {
		dispatch(todos.actions.addItem(newItem));
	};
	return (
		<div>
			<TextInput
				type="text"
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
				placeholder="What do you need to do today?"
			/>
			<Button
				onClick={() => {
					handleAddItem();
					setNewItem('');
				}}>
				Add to my list
			</Button>
		</div>
	);
};

const TextInput = styled.input`
	width: 80%;
	padding: 5px;

	margin-bottom: 5px;
	border-radius: 9px;
`;

const Button = styled.button`
	box-shadow: inset 0px 1px 0px 0px #ffffff;
	background: linear-gradient(to bottom, #bbbbbb 5%, #ffe3d8 100%);
	background-color: #f9f9f9;
	border-radius: 12px;
	border: 1px solid #dcdcdc;
	display: inline-block;
	cursor: pointer;
	color: #666666;
	font-family: Arial;
	font-size: 15px;
	font-weight: bold;
	padding: 6px 24px;
	text-decoration: none;
	text-shadow: 0px 1px 0px #ffffff;
	margin: 5px;

	&:hover {
		background:linear-gradient(to bottom, #ffe3d8 5%, #bbbbbb 100%);
	background-color:#e9e9e9;
}

&:active {
	position:relative;
	top:1px;
}
	}
`;
