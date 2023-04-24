import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
}

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setupStore: (store, action) => {
      store.items = action.payload;
    },
    addToDo: (store, action) => {
    // store.items.push(action.payload)
      store.items = [action.payload, ...store.items];
      localStorage.setItem('toDoList', JSON.stringify(store.items));
    },
    deleteAllToDo: (store) => {
      store.items = [];
      localStorage.setItem('toDoList', JSON.stringify(store.items));
    },
    deleteSingleToDo: (store, action) => {
      const id = action.payload;
      console.log('action.payload', action.payload)
      const copyOfToDoArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfToDoArrayFromStore.findIndex(condition);
      copyOfToDoArrayFromStore.splice(foundIndex, 1);
      store.items = copyOfToDoArrayFromStore;
      localStorage.setItem('toDoList', JSON.stringify(store.items));
    },
    toggleIfToDoIsDone: (store, action) => {
      const id = action.payload;
      console.log('action.payload', action.payload)
      const copyOfToDoArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfToDoArrayFromStore.findIndex(condition);
      // eslint-disable-next-line max-len
      copyOfToDoArrayFromStore[foundIndex].isDone = !copyOfToDoArrayFromStore[foundIndex].isDone;
      store.items = copyOfToDoArrayFromStore;
      localStorage.setItem('toDoList', JSON.stringify(store.items));
    }
  }

})

export default todos;