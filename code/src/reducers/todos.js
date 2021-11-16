// creating first slice here 

// step 1 importing createSlice from toolkit
import { createSlice } from "@reduxjs/toolkit";
import uniqid from 'uniqid';

// name variables as name of the file
// createSlice take in an argumnets, an object 
const todos = createSlice({
	name: 'todos', 
	// initialState is an object
	initialState: {
		items: []
	},
	// reducers is just another objects where each property is just one method
	// to update the store 
	// reducers provides with two arguments, one is the store, 
	// and the second is action 
	reducers:{
		// arguments are the data that you pass, this data is about a todo you want to add 
		addTodo: (store, action) => {
			// payload is like a variable 
			const newTodo = {
				id: uniqid(),
				text: action.payload,
				// need this to trigger todos if there are completed or not
				isComplete: false
			}
			// ...(three dots) is spread what was before, plus add data
			store.items = [...store.items, newTodo]
		}, 
		toggleTodo: (store, action) => {
			const updatedItems = store.items.map((item) => {
				if (item.id === action.payload) {
					const updatedTodo = {
						...item,
						isComplete: !item.isComplete
					}
					return updatedTodo;
				} else {
					return item;
				}
			});
			
			store.items = updatedItems;
		},
		deleteTodo: (store, action) => {
			const decreasedItems = store.items.filter((item) => item.id !== action.payload)

			store.items = decreasedItems;
		}
	},
});

export default todos;


// slices are chucks of code in out store
// we can have as many as we want 