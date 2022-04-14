import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

const todo = createSlice({
	name: 'todo',
	initialState: {
		items: [],
	},
	reducers: {
		addTodo: (store, action) => {
			const newTask = {
				text: action.payload,
				editable: false,
				isCompleted: false,
				id: uniqid(),
			}

			store.items = [newTask, ...store.items]
		},

		toggleTodo: (store, action) => {
			const updatedItem = store.items.map((item) => {
				if (item.id === action.payload) {
					const updatedTodo = {
						...item,
						isCompleted: !item.isCompleted,
					}
					return updatedTodo
				} else {
					return item
				}
			})
			store.items = updatedItem
		},

		updateTodo: (store, action) => {
			const updatedText = store.items.map((item) => {
				if (item.id === action.payload) {
					const updatedTodoText = {
						...item,
						text: 'changed',
					}
					return updatedTodoText
				} else {
					return item
				}
			})
			store.items = updatedText
		},

		deleteTodo: (store, action) => {
			const decreasedItem = store.items.filter(
				(item) => item.id !== action.payload
			)

			store.items = decreasedItem
		},

		deleteAll: (store) => {
			store.items = []
		},
	},
})

export default todo
