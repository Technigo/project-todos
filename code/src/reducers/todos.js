import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: {
    name: 'todos',
    items: [
      {
        id: 1,
        description: 'This is a test todo',
        done: false
      }
    ]
  }
}

export const todos = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    //Reducers: addTodo, removeTodo, setDone
  }
})