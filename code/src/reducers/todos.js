import { createSlice } from '@reduxjs/toolkit'
// import uniqid from 'uniqid';

const initialState = {
	items: []
}

const todos = createSlice({
	name: 'todos',
	initialState: {
		items: [],
	},
	reducers: {
		addTodo: (store, action) => {
			const newTodo = {
                id: Date.now(),
				text: action.payload,
				done: false,
			}
			store.items = [...store.items, newTodo]
		},
		completeChange: (store, action) => {
			const completedItems = store.items.map((item) => {
				if (item.id === action.payload) {
					const updatedTodo = {
						...item,
						done: true,
					};
					return updatedTodo
				} else {
					return item;
				}
				
			});

			store.items = completedItems
		},
		deleteTodo: (store, action) => {
			const deletedItems = store.items.filter(
				(item) => item.id !== action.payload
			)

			store.items = deletedItems
		},

		onDelete: () => {
			return initialState
		},
		completeAllTasks: (store) => {
			const completeAll = store.items.map((item) => {
			  return {
				...item,
				done: true,
			  }
			})
			store.items = completeAll
		  },
	},
})

export default todos
