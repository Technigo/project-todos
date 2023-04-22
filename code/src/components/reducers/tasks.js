import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: '1',
      text: 'Rain clothes',
      isChecked: false },
    { id: '2',
      text: 'Cap',
      isChecked: true },
    { id: '3',
      text: 'Sun Lotion',
      isChecked: true },
    { id: '4',
      text: 'Extra pants(2)',
      isChecked: true },
    { id: '5',
      text: 'Jacket',
      isChecked: false },
    { id: '6',
      text: 'The green backpacket',
      isChecked: false }
  ]
}

const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (store, action) => {
      store.items = [...store.items, action.payload]
    },
    deleteTask: (store, action) => {
      store.items.filter((item) => item.id !== action.payload.id)
    },
    toggleItem: (store, action) => {
      const { id } = action.payload
      store.items = store.items.map((item) => {
        if (item.id === id) {
          return { ...item, isChecked: !item.isChecked }
        }
        return item
      })
    }
  }
})

export default tasks;
