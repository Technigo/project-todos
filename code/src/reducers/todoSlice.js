/* eslint no-useless-return: "error" */

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload)
    },

    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false
          } else {
            item.done = true
          }
        } return false;
      })
    },
    deleteAll: (state) => {
      state.todos.todoList = []
    },

    deleteTodo: (state, action) => {
      const filteredItems = state.todoList.filter((item) => item.id !== action.payload);
      state.todoList = filteredItems;
    },

    completeAll: (state) => {
      const allCompleted = state.todoList.map((todo) => {
        return {
          ...todo,
          done: true
        }
      })
      state.todoList = allCompleted
    }
  }
});

export const { saveTodo, setCheck, deleteAll, deleteTodo, completeAll } = todoSlice.actions

export const selectTodoList = ((state) => state.todos.todoList)

export default todoSlice.reducer;