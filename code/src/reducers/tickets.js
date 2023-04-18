import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 'sgww44',
      name: 'Stay awesome',
      isDone: false
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
    }
    // markAsDone: (store, action) => {
    // check off when done

  }
});

export default tickets;