import { createSlice } from '@reduxjs/toolkit'

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 1, description: 'First Task', isCompleted: false },
      { id: 2, description: 'Second Task', isCompleted: true },
      { id: 3, description: 'Third Task', isCompleted: false }
    ]
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
    addTask: (store, action) => {
      store.items.push({ ...action.payload, isCompleted: false})
    }
  }
})

export default tasks