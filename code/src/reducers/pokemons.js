import { createSlice } from '@reduxjs/toolkit'

const data = [
    {
      id: 'abcd1234',
      name: 'Buy laundry detergent',
      isDone: false,
    },
    {
      id: 'efgh5678',
      name: 'Do project!',
      isDone: false,
    },
    {
        id: 'ijkl9101',
        name: 'Practice yin yoga',
        isDone: false,
    },
  ]

const pokemons = createSlice({
  name: 'pokemons',
  initialState: {
    items: data
  },
  reducers: {
    toggleItem: (store, action) => {
        console.log(store)
        console.log(action)

      store.items.forEach(item => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone
        }
      })
    }
  },
})

export default pokemons 