import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { todos } from '../reducers/todos';

export const Item = ({ id, text, isCompleted, timestamp }) => {
	const dispatch = useDispatch();
	const [completed, setCompleted] = useState(false);
	const handleCompleted = (id) => {
		dispatch(todos.actions.toggleCompleted(id));
	};
	const handleDeleteItem = (id) => {
		dispatch(todos.actions.removeItem(id));
	};
	return (
		<ItemContainer style={{ opacity: `${isCompleted ? '0.3' : '1'} ` }}>
			<ItemText>{text}</ItemText>
			<p>Added: {moment(timestamp).format('MMM Do YY')}</p>
			<CompleteDeleteContainer>
				<Button
					onClick={(e) => {
						setCompleted(id);
						handleCompleted(id);
					}}>
					Click to complete
				</Button>
				<Button onClick={() => handleDeleteItem(id)}>Delete</Button>
			</CompleteDeleteContainer>
		</ItemContainer>
	);
};

const ItemContainer = styled.div`
	background-color: #03506f;
	border-radius: 12px;
	padding: 20px;
	margin-top: 5px;
	margin-bottom: 5px;
`;

const ItemText = styled.p`
	font-weight: bold;
`;

const CompleteDeleteContainer = styled.div`
	display: flex;
	align-items: center;
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
	font-size: 10px;
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
