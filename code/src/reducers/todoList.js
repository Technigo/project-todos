import { createSlice } from '@reduxjs/toolkit'

const list = [
  {
    id: 1,
    task: 'Work with todo project',
    isCompleted: false,
    delete: '🗑'
  },
  {
    id: 2,
    task: 'Cook dinner',
    isCompleted: false,
    delete: '🗑'
  },
  {
    id: 3,
    task: 'Do laundry',
    isCompleted: false,
    delete: '🗑'
  }
]

export const todoList = createSlice({
  name: 'todoList',
  initialState: list,
  reducers: {
    addTask: (state, action) => {
      const id = Math.random()
      const todo = {
        id: id,
        task: action.payload,
        isCompleted: false,
        delete: '🗑'
      };
      state.push(todo)
    },

    clearAllTask: (state, action) => {
      state.splice(0, state.length)
    },

    handleChecked: (state, action) => {
      console.log(action, "action")
      const { itemId, task,isCompleted } = action.payload
      state.push({
        itemId,
        task,
        isCompleted: true
      })
    }
  }
})
