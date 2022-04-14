import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';
import moment from 'moment';

const todos = createSlice({
	name: 'todos',
	initialState: {
		items: [],
	},
	reducers: {
		addTodo: (store, action) => {
			const newTodo = {
				id: uniqid(),
				text: action.payload,
				isComplete: false,
				timePosted: moment().format('DD MMMM YYYY, HH:mm'),
			};

			store.items = [...store.items, newTodo];
		},
		toggleTodo: (store, action) => {
			// v1 Mutability approach
			// store.items.forEach((item) => {
			// 	if (item.id === action.payload) {
			// 		item.isComplete = !item.isComplete;
			// 	}
			// });
			//v2 Imutability approach
			const updatedItems = store.items.map((item) => {
				if (item.id === action.payload) {
					const updatedTodo = {
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
			const decreasedItems = store.items.filter(
				(item) => item.id !== action.payload
			);
			store.items = decreasedItems;
		},
	},
});

export default todos;

// const increaseFunction = () => {
// 	setCounter(counter + 1);
// };

// const decreaseFunction = () => {
// 	setCounter(counter - 1);
// };
