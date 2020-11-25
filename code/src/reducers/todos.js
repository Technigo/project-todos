import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
	items: [
		{
			id: '123',
			text: 'Drink 2 l of water',
			isCompleted: false,
		},
		{
			id: '234',
			text: 'Take a 30 min walk',
			isCompleted: false,
		},
		{
			id: '345',
			text: 'Meditate or do mindfulness for 10 minutes',
			isCompleted: false,
		},
	],
};

export const todos = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		removeItem: (store, action) => {
			const itemId = action.payload;
			const filteredArray = store.items.filter((item) => item.id !== itemId);
			store.items = filteredArray;
		},

		addItem: (store, action) => {
			const newItem = {
				id: uuidv4(),
				text: action.payload,
				isCompleted: false,
			};
			const newItemsArray = [...store.items, newItem];

			store.items = newItemsArray;
		},

		toggleCompleted: (store, action) => {
			const itemId = action.payload;
			const updatedArray = store.items.map((item) => {
				if (item.id == itemId) {
					return {
						...item,
						isCompleted: !item.isCompleted,
					};
				} else {
					return item;
				}
			});
			store.items = updatedArray;
		},
	},
});
