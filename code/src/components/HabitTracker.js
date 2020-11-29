import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Item } from './Item';
import { AddItem } from './AddItem';
import { todos } from '../reducers/todos';

export const HabitTracker = () => {
	const items = useSelector((store) => store.todos.items);
	const dispatch = useDispatch();

	const completedItems = items.filter((item) => item.isCompleted);
	const notCompletedItems = items.filter((item) => !item.isCompleted);

	const handleClearNotes = () => {
		dispatch(todos.actions.cleanItems());
	};

	return (
		<NotesContainer>
			<h1>Handy todo-list & habit-tracker</h1>
			<NotesCounter
				style={items.length === 0 ? { display: 'none' } : { display: 'block' }}>
				<div>Total notes on todo-list: {items.length}</div>
				<div>Completed notes: {completedItems.length}</div>
				<div>Not completed notes: {notCompletedItems.length}</div>
			</NotesCounter>

			<Notes>
				<AddItem />
				{notCompletedItems.map((item) => (
					<Item key={item.id} id={item.id} {...item} />
				))}
				<div
					style={
						items.length === 0 ? { display: 'none' } : { display: 'block' }
					}>
					Completed posts:
				</div>
				{completedItems.map((item) => (
					<Item key={item.id} id={item.id} {...item} />
				))}
				<Button onClick={() => handleClearNotes()}>Clear all notes</Button>
			</Notes>
		</NotesContainer>
	);
};

const NotesContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const NotesCounter = styled.section`
	margin-top: 50px;
	background-color: #03506f;
	width: 80%;
	margin: 5px;
	padding: 20px;
	color: #ffe3d8;
	border-radius: 12px;
`;

const Notes = styled.section`
	display: flex;
	flex-direction: column;
	background-color: #0a043c;
	width: 80%;
	color: #ffe3d8;
	padding: 20px;
	border-radius: 12px;
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
