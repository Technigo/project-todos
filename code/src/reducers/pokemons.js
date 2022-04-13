import { createSlice } from '@reduxjs/toolkit'

const data = [
    {
      id: 'abcd1234',
      name: 'Practice yoga',
      isDone: false,
    }
  ]

const pokemons = createSlice({
  name: 'pokemons',
  initialState: {
    items: data
  },
  reducers: {
    toggleItem: (store, action) => {
      store.items.forEach(item => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone
        }
      })
    },
    deleteItem: (store, action) => {
      store.items.splice(action.payload, 1)
    },
    addItem: (store, action) => {
      store.items.push(action.payload);
    }
  },
})

export default pokemons 