import {createSlice} from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos',
  initialState: {
    tasks: [
      {id: 1, description: 'Test1', isComplete: false},
      {id: 2, description: 'Test2', isComplete: false},
      {id: 3, description: 'Test3', isComplete: false}
    ]
  },
  reducers: { //methods to update store
    toggleComplete: (store, action) => {
      const updatedTasks = store.tasks.map(todo => {
        if (todo.id === action.payload) { 
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        } else {
            return todo
        }
      })
      store.tasks = updatedTasks
    }
  }
}) 

export default todos
//slice file 