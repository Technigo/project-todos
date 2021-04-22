import { createSlice } from '@reduxjs/toolkit'

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: []
  },
  reducers: {
    toggleCheckbox: (store, action) => {
      const updatedItems = store.items.map(task => {
				if (task.id === action.payload) {
					return {	
						...task,
						isCompleted: !task.isCompleted
					}
				} else {
					return task
				}
			})
			store.items = updatedItems
    },
    removeTask: (store, action) => {
      const decreasedItems = store.items.filter(task => task.id !== action.payload)
      store.items = decreasedItems
    },
    addTask: (store, action) => {
      store.items = [...store.items, action.payload]
    },
    clearAll: (store) => {
      store.items = []
    }
  }
})

export default tasks