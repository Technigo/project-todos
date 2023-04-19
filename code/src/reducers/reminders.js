import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: '238uskfhslkjdfh98',
      name: 'Bobsebulbus',
      isCaught: false
    },
    {
      id: '238uskfhslkjdfh99',
      name: 'Jigglypuff',
      isCaught: true
    },
    {
      id: '238uskfhslkjdfh100',
      name: 'BonBon',
      isCaught: false
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
    }
  }
})