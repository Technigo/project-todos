import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: '238uskfhslkjdfh98',
      name: 'Bobsebulbus',
      isDone: false
    },
    {
      id: '238uskfhslkjdfh99',
      name: 'Jigglypuff',
      isDone: true
    },
    {
      id: '238uskfhslkjdfh100',
      name: 'BonBon',
      isDone: false
    }
  ]
}

export const notereminder = createSlice({
  name: 'notereminder',
  initialState,
  reducers: {
    addNote: (store, action) => {
    // Make it immutable(assign it a new value) by giving it a spread operator ...
    // can also be used to add a property to an object
      store.items = [...store.items, action.payload];
    },
    deleteAllNotes: (store) => {
      store.items = [];
    },
    deleteSingleNote: (store, action) => {
      const id = action.payload;
      console.log('action.payload', action.payload)
      // splice needed to remove a single element if we know the index
      const copyOfNoteArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfNoteArrayFromStore.findIndex(condition);
      copyOfNoteArrayFromStore.splice(foundIndex, 1);
      store.items = copyOfNoteArrayFromStore;
    },
    toggleIfItsDone: (store, action) => {
      const id = action.payload;
      const copyOfNoteArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfNoteArrayFromStore.findIndex(condition);
      copyOfNoteArrayFromStore[foundIndex].isDone = !copyOfNoteArrayFromStore[foundIndex].isDone
      store.items = copyOfNoteArrayFromStore;
    }
  }
})