import { createSlice } from '@reduxjs/toolkit'

const pokemons = createSlice({
    name: 'pokemons',
    initialState: {
        items: [
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
    },
    reducers:{}
})

export default pokemons;
