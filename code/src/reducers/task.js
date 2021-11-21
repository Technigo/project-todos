import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const task = createSlice({
	name: 'task',
	initialState: {
		items: [],
	},
	reducers: {
		addTask: (store, action) => {
			const data = action.payload;

			const newTask = {
				id: uniqid(),
				text: data,
				isComplete: false,
			};
			store.items = [...store.items, newTask];
		},

		toggleTask: (store, action) => {
			//mutability approach
			// store.items.forEach(item => {
			// 	if (item.id === action.payload) {
			// 		item.isComplete = !item.isComplete
			// 	}
			// })

			//immutability approach
			const updatedItems = store.items.map((item) => {
				if (item.id === action.payload) {
					const updatedTask = {
						...item,
						isComplete: !item.isComplete,
					};
					return updatedTask;
				} else {
					return item;
				}
			});

			store.items = updatedItems;
		},

		deleteTask: (store, action) => {
			//mutability approach
			// store.items.splice(action.payload, 1);

			//immutability approach
			const decreasedItems = store.items.filter(
				(item) => item.id !== action.payload
			);

			store.items = decreasedItems;
		},
	},
});

export default task;
