import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const todos = createSlice({
	name: 'todos',
	initialState: {
		items: [],
	},
	reducers: {
		addTodo: (store, action) => {
            console.log(action);
            
			const newTodo = {
				id: uniqid(),
				text: action.payload,
				isComplete: false,
			};

			// // v1 Mutability approach
			// store.items.push(data);

			// v2 Immutability approach
			store.items = [...store.items, newTodo];
		},
		toggleTodo: (store, action) => {
			// v1 Mutability approach
			// store.items.forEach((item) => {
			// 	if (item.id === action.payload) {
			// 		item.isComplete = !item.isComplete;
			// 	}
			// });

			// v2 Immutability approach
			const updatedItems = store.items.map((item) => {
				if (item.id === action.payload) {
					const updatedTodo = {
						// id: item.id,
						// text: item.text,
						// isComplete: item.isComplete,
						...item,
						isComplete: !item.isComplete,
					};
					return updatedTodo;
				} else {
					return item;
				}
			});

			store.items = updatedItems;
		},
		deleteTodo: (store, action) => {
			// v1 Mutability approach (index in action.payload)
			// store.items.splice(action.payload, 1);

			// v2 Immutability approach (id in action.payload)
			const decreasedItems = store.items.filter(
				(item) => item.id !== action.payload
			);

			store.items = decreasedItems;
		},
	},
});

export default todos;