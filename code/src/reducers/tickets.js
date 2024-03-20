/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 'initialId',
      name: '',
      isDone: false,
      isInVault: false,
      isPrioritized: false,
      createdAt: ''
    }
  ]
}
// the reducers is an object, so instead of the = when we assign properties we use :
const tickets = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    // first argument references state of store, 2nd references the data being passed down from component. We use this to retain items when refreshing
    setupStore: (store, action) => {
      store.items = action.payload;
    },
    addTODO: (store, action) => {
      // all of the items already in the store + the payload will become the new store
      store.items = [...store.items, action.payload];
      //  localStorage.setItem('ticketsList', JSON.stringify(store.items));
    },
    removeTODO: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload.id)
      localStorage.setItem('ticketsList', JSON.stringify(store.items));
      console.log(store.items)
    },
    markAsDone: (store, action) => {
      const toggledTodo = store.items.find((item) => item.id === action.payload.id);
      if (toggledTodo) {
        toggledTodo.isDone = !toggledTodo.isDone;
        console.log('toggling happened')
        //  localStorage.setItem('ticketsList', JSON.stringify(store.items));
      }
    },
    markAsPrio: (store, action) => {
      const importantTodo = store.items.find((item) => item.id === action.payload.id);
      if (importantTodo) {
        importantTodo.isPrioritized = !importantTodo.isPrioritized;
        console.log('important')
      }
    },
    markAllDone: (store) => {
      store.items.forEach((item) => {
        item.isDone = true;
      });
      // localStorage.setItem('ticketsList', JSON.stringify(store.items));
    },
    clearAll: (store) => {
      if (store.items.length > 0) {
        store.items = [];
        //  localStorage.setItem('ticketsList', JSON.stringify(store.items));
      }
    }
    /* moveToTickets: (store, action) => {

    } */
  }
})

export default tickets;