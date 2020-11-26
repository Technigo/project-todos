import React from 'react';
import { useSelector } from 'react-redux';

import { Item } from './Item';
import { AddItem } from './AddItem';

export const HabitTracker = () => {
	const items = useSelector((store) => store.todos.items);

	const completedItems = items.filter((item) => item.isCompleted);
	const notCompletedItems = items.filter((item) => !item.isCompleted);

	return (
		<>
			<div>Total posts on todo-list: {items.length}</div>
			<div>Completed posts: {completedItems.length}</div>
			<div>Not completed posts: {notCompletedItems.length}</div>
			<AddItem />
			{notCompletedItems.map((item) => (
				<Item key={item.id} id={item.id} {...item} />
			))}
			<div>Completed posts:</div>
			{completedItems.map((item) => (
				<Item key={item.id} id={item.id} {...item} />
			))}
		</>
	);
};
