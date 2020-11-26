import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
		<>
			<div>Total notes on todo-list: {items.length}</div>
			<div>Completed notes: {completedItems.length}</div>
			<div>Not completed notes: {notCompletedItems.length}</div>
			<AddItem />
			{notCompletedItems.map((item) => (
				<Item key={item.id} id={item.id} {...item} />
			))}
			<div>Completed posts:</div>
			{completedItems.map((item) => (
				<Item key={item.id} id={item.id} {...item} />
			))}
			<button onClick={() => handleClearNotes()}>Clear all notes</button>
		</>
	);
};
