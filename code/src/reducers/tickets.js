import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 'sgww44',
      name: 'Stay awesome',
      isDone: false,
      prioritized: false
    }
  ]
}
// the reducers is an object, so instead of the = when we assign properties we use :
const tickets = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    addTODO: (store, action) => {
      // all of the items already in the store + the payload will become the new store
      store.items = [...store.items, action.payload]
    },
    removeTODO: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload.id)
      console.log(store.items)
    },
    markAsDone: (store, action) => {
      const toggledTodo = store.items.find((item) => item.id === action.payload.id);
      if (toggledTodo) {
        toggledTodo.isDone = !toggledTodo.isDone;
        console.log('toggling done')
      }
    },
    clearAll: (store) => {
      if (store.items.length > 0) {
        store.items = [];
      }
    }
  }
})

export default tickets;