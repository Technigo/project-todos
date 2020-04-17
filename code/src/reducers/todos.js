import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: {
    name: 'todos',
    items: [
      {
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
    addTodo: (state, action) => {
      const itemInfo = action.payload
      state.list.items.push(itemInfo)
    }
    //Reducers: removeTodo, setDone
  }
})