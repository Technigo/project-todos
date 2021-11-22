import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const todos = createSlice({
	name: 'todos',
	initialState: {
		items: [],
	},
	//creating reducers to able to create different function in to-do-list
	reducers: {
		addTodo: (store, action) => {
            const newTodo = {
				id: uniqid(),
				text: action.payload,
				isComplete: false,
			};

			
			store.items = [...store.items, newTodo];
		},
		// reducer to mark completed. Using the  Immutability approach 
		toggleTodo: (store, action) => {
			
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
		// reducer to delete a todo - Mutability approach 
		        deleteTodo: (store, action) => {
            store.items.splice(action.payload, 1)
        } 
    }
})

export default todos; 