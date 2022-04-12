import { createSlice } from '@reduxjs/toolkit'

const data = [
    {
        id: '55555',
        name: 'Bulbasaur',
        isCaught: false,
    },
    {
        id: '666666',
        name: 'Charmander',
        isCaught: false,
    },
]

const pokemons = createSlice({
    name: 'pokemons',
    initialState: {
        items: data,
    },
    reducers: {
        toggleItem: (store, action) => {
            console.log("Store:", store)
            console.log("Action:", action)

            store.items.forEach(item => {
                if (item.id === action.payload) {
                item.isCaught = !item.isCaught
                  }
            })
        }
    },
})

export default pokemons;
