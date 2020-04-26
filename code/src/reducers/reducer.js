import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: {
    name: 'todo list',
    items: [
  { id: 1, text: 'Watch video on actions & reducers', complete: true },
  { id: 2, text: 'Follow redux codealong', complete: true },
  { id: 3, text: 'Fork weekly assignment', complete: true },
  { id: 4, text: 'Create a todo app', complete: false }
  ]
}
}

export const todos = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {

    // add tasks
    addTodo: (state, action) => {
      const { itemInfo } = action.payload;
      state.list.items.push(itemInfo);
    },
    //check todo done
    setDone: (state, action) => {
      const { itemIndex, done } = action.payload
      state.list.items[itemIndex].done = done
    },
    //remove all tasks
    removeAll: (state, action) => {
      state.list = []
    }
  }
})