import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  completedCount: 0
}

export const toDos = createSlice({
  name: 'toDos',
  initialState,
  reducers: {
    addToDo: (store, action) => {
      store.items = [...store.items, action.payload]
    },
    deleteToDo: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload.id)
      store.completedCount = store.items.filter((item) => item.checked).length
    },
    toggleChecked: (store, action) => {
      const { id } = action.payload
      store.items = store.items.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked }
        }
        return item
      })
      store.completedCount = store.items.filter((item) => item.checked).length
    }
  }
})