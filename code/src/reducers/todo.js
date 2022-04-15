import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'
import { format } from 'date-fns'

const todo = createSlice({
	name: 'todo',
	initialState: {
		items: [],
	},
	reducers: {
		addTodo: (store, action) => {
			const newTask = {
				text: action.payload,
				isCompleted: false,
				id: uniqid(),
				createdAt: format(new Date(), 'LLLL d, yyyy | HH:mm'),
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
			const { id, text } = action.payload
			console.log(action)
			const updatedText = store.items.map((item) => {
				if (item.id === id) {
					const updatedTodoText = {
						...item,
						text: text,
					}
					return updatedTodoText
				} else {
					return item
				}
			})
			store.items = updatedText
		},

		deleteTodo: (store, action) => {
			const decreasedItem = store.items.filter((item) => item.id !== action.payload)

			store.items = decreasedItem
		},

		deleteAll: (store) => {
			store.items = []
		},

		completeAll: (store) => {
			const allCompleted = store.items.map((task) => {
				return {
					...task,
					isCompleted: true,
				}
			})
			store.items = allCompleted
		},
	},
})

export default todo
