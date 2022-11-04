import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment'

const toDos = createSlice({
  name: 'toDos',
  initialState: {
    items: []
  },
  reducers: {
    setAllItems: (store, action) => {
      store.items = action.payload;
    },
    toggleCompleted: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isCompleted = !item.isCompleted
        }
      })
    },
    addItem: (store, action) => {
      const inputValue = action.payload;
      store.items.push({
        id: new Date().getTime(),
        content: `${inputValue}`,
        isCompleted: false,
        timeStamp: moment().calendar()
      })
    },
    deleteTask: (store, action) => {
      store.items = store.items.filter((task) => task.id !== action.payload)
    }/* ,
    filterCompleted: (store, action) => {
      store.items = store.items.filter((task) => task.isCompleted)
    } */
  }
})
export default toDos;