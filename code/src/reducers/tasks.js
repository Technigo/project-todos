import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      id: 1,
      name: 'Do the laundry',
      complete: true
    },
    {
      id: 2,
      name: 'Book flights home',
      complete: false
    },
    {
      id: 3,
      name: 'Finish assignment',
      complete: false
    }
  ]

}

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (store, action) => {
      store.items = [...store.items, action.payload];
    }
  }

})