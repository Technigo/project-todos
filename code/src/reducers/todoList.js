import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [
    {
      id: 1,
      task: 'Work with todo project',
      isCompleted: false,
    },
    {
      id: 2,
      task: 'Cook dinner',
      isCompleted: false,
    },
    {
      id: 3,
      task: 'Do laundry',
      isCompleted: false,
    }
  ]
}

export const todoList = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const id = Math.max(...state.list.map(item => item.id)) + 1
      const todo = {
        id: id,
        task: action.payload,
        isCompleted: false,
      }
      const updatedList= [...state.list,todo]
      state.list = updatedList
    },

    clearAllTask: (state, action) => {
      state.list = state.list.map((item) => {
        return {
          ...item, isCompleted: true 
        }
      })
    },

    handleChecked: (state, action) => {
      const todo = state.list.find((item) => item.id === action.payload.todoId)
      todo.isCompleted = !todo.isCompleted
    },

    handleDeleted: (state, action) => {
      const arrayAfterDelete = state.list.filter((item) => item.id !== action.payload.todoId)
      state.list = arrayAfterDelete
    }
  }
})
