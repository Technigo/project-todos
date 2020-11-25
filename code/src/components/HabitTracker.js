import React from 'react';
import { useSelector } from 'react-redux';

import { Item } from './Item';
import { AddItem } from './AddItem';

export const HabitTracker = () => {
	const items = useSelector((store) => store.todos.items);
	console.log(items);
	return (
		<>
			<AddItem />
			{items.map((item) => (
				<Item key={item.id} id={item.id} {...item} />
			))}
		</>
	);
};
