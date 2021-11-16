import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

//our first and only slice - a chunk from our global store

const todos = createSlice({ //name the varibale as the slice
	name: 'todos', //3 properties, name, initalState and reducers
	initialState: {
		items: [], //empty array of our todos
	},

	//Reducers are always provided with two arguments, one is the store (or the current value of the store). The other is action, some information that we send from the component. 


	reducers: {
		addTodo: (store, action) => { //Is an object where each property is just one method to update the store
			const newTodo = {
				id: uniqid(), //uniqe id fron uniqe id npm
				text: action.payload,
				isComplete: false,
			};



			// v2 Immutability approach. Prepare new glass and add what ever was in the old glass and add one other extra thing (store.items)
			store.items = [...store.items, newTodo];
		},
		toggleTodo: (store, action) => {

			// v2 Immutability approach
			const updatedItems = store.items.map((item) => {
				if (item.id === action.payload) {
					const updatedTodo = {
						// id: item.id,
						// text: item.text,
						// isComplete: item.isComplete,
						...item,
						isComplete: !item.isComplete, // ! = equal false
					};
					return updatedTodo;
				} else {
					return item;
				}
			});

			store.items = updatedItems;
		},
		deleteTodo: (store, action) => {

			// v2 Immutability approach (id in action.payload)
			const decreasedItems = store.items.filter(
				(item) => item.id !== action.payload
			);

			store.items = decreasedItems;
		},
	},
});

export default todos;
