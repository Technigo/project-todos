import { createSlice } from '@reduxjs/toolkit'; // helps create a new instance of a slice
import uniqid from 'uniqid'; //import unique id from npm package
import moment from 'moment';

const todos = createSlice({
	name: 'todos',
	initialState: {
		//an empty array that collects the input tasks
		items: [],
	},
	// The object reducers that holds methods which updates the store.
	reducers: {
		addTodo: (store, action) => {
			const newTodo = {
				id: uniqid(), // Unique id from npm package
				text: action.payload,
				isComplete: false,
				createdAt: moment().calendar(), //key value
			};

			//v1 Mutability approach (mutate the existing) 1 glass w/water and add water. Immer(import) helps
			// store.items.push(data);

			//v2 Immutability makes a completely new variable. Pour water from the existing glass to a new glass and then add more water
			store.items = [...store.items, newTodo]; //Spreads whatever was there before (...store) and then adds new data.
		},
		toggleTodo: (store, action) => {
			// v1 Mutability approach
			// store.items.forEach((item) => {
			// 	//Comparing the toggled item.id with items in the array
			// 	if (item.id === action.payload) {
			// 		item.isComplete = !item.isComplete;
			// 	}
			// });

			// v2 Immutability approach creating a whole new array
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
			//v1 Mutability approach (index in action.payload)
			// store.items.splice(action.payload, 1);

			// v2 Immutability approach (id in action.payload)
			const decreasedItems = store.items.filter(
				(item) => item.id !== action.payload
			);
			store.items = decreasedItems;
		},
		completeAllTasks: (store) => {
			const itemsAllCompleted = store.items.map((item) => {
				return {
					...item,
					isComplete: true,
				};
			});
			store.items = itemsAllCompleted;
		},

		removeAllTasks: (store) => {
			return {
				...store,
				items: [],
			};
		},
	},
});

export default todos;

//Reducers is a slight chunk of the global store
