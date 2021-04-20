import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: 1, decription: '1.Go out in the sun!', isComplete: false },
      { id: 2, decription: '2.Watch a sitcom!', isComplete: false },
      { id: 3, decription: '3.Have a glas of prosecco!', isComplete: false }
    ]
  },
  reducers: {
    toggleComplete: (store, action) => {
      const updatedItems = store.items.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        } else {
          return todo

        }
      })
      store.items = updatedItems
    }
  }

})
export default todos
