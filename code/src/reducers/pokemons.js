import { createSlice } from '@reduxjs/toolkit'

const data = createSlice({
    name: 'pokemons',
    initialState: {
    items: [
        {id: '8957283520',
        name: 'Bulbasaur',
        isCaught: false
        },  
        { id: "9048604380",
        name: 'Charmander',
        isCaught: false
        },
],
}
const pokemons = createSlice({
name: 'pokemons',
initialState: {
    items: data,
},
    reducers: {
        toggleItem: (store, action) => {
        store.items.forEach(item => {
            if (item.id === action.payload) {
                item.isCaught = !item.isCaught
            }
        })
        }
    },
})

export default pokemons