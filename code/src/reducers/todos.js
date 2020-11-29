import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
	items: [
		{
			id: uuidv4(),
			timestamp: Date.now(),
			text: 'Drink 2 l of water to stay hydrated',
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
				timestamp: Date.now(),
				text: action.payload,
				isCompleted: false,
			};
			const newItemsArray = [...store.items, newItem];

			store.items = newItemsArray;
		},

		toggleCompleted: (store, action) => {
			const itemId = action.payload;
			const updatedArray = store.items.map((item) => {
				if (item.id === itemId) {
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

		cleanItems: (store, action) => {
			//is there a better way to do this? array splice?
			// that cleans the array, not makes a new one
			const cleanArray = [];
			store.items = cleanArray;
		},
	},
});
