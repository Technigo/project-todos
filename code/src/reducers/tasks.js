import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      id: '12345',
      name: 'first',
      isDone: false
    },
    {
      id: '34567',
      name: 'second',
      isDone: false
    },
    {
      id: '6578453',
      name: 'third',
      isDone: true
    }
  ]
}

const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // first argument references state of the store,
    // second argument references the data that is passed down from a component
    addTask: (store, action) => {
      store.items = [...store.items, action.payload]
    }
  }
})

export default tasks
