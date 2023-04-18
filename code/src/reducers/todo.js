import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 'geagw45',
      name: 'Test1',
      isDone: false
    },
    {
      id: 'geagw46',
      name: 'Test2',
      isDone: false
    },
    {
      id: 'geagw47',
      name: 'Test3',
      isDone: false
    }
  ]
}
// the reducers is an object, so instead of the = when we assign properties we use :
const TODO = createSlice({
  name: 'TODOS',
  initialState,
  reducers: {
    addTODO: (store, action) => {
      // all of the items already in the store + the payload will become the new store
      store.items = [...store.items, action.payload]
    }
  }
});

export default TODO;