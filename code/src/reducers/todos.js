import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

const todos = createSlice({
	name: 'todos',
	initialState: {
		items: [
      {
        id: 1,
        text: "Complete Project",
        isComplete: false,
        createdDate: 1606383658465,
      },
      {
        id: 2,
        text: "Celebrate new job",
        isComplete: false,
        createdDate: 1606383658465,
      },
      {
        id: 3,
        text: "Buy a gift",
        isComplete: false,
        createdDate: 1606493967957,
      },
    ],
	},
	reducers: {
		addTodo: (store, action) => {
			const newTodo = {
				id: uniqid(),
				text: action.payload,
				isComplete: false,
			}
      // Immutability approach
      store.items = [...store.items, newTodo]
		},

    toggleTodo: (store, action) => {
		  // Immutability approach
			const updatedItems = store.items.map((item) => {
				if (item.id === action.payload) {
					const updatedTodo = {
						...item,
						isComplete: !item.isComplete,
					}
					return updatedTodo
				} else {
					return item
				}
			})

			store.items = updatedItems
		},

		deleteTodo: (store, action) => {
		  // Immutability approach (id in action.payload)
			const decreasedItems = store.items.filter(
				(item) => item.id !== action.payload
			)

			store.items = decreasedItems
		}
	}
})

export default todos