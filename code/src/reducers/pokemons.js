import { createSlice } from '@reduxjs/toolkit'

const data = [
    {
        id: 'sfsegnege',
        name: 'Bulbasaur',
        isCaught: false,
    },
    {
        id: 'egvkmeobe',
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
        
        // v1 - Mutability
        store.items.forEach(items => {
            if (items.id === action.payload) {
                items.isCaught = !items.isCaught
            }
        })

        // v2 - Immutability
        const updatedItems = store.items.map(item => {
            if (item.id === action.payload) {
                const updatedItem = {
                    ...item,
                    isCaught: !item.isCaught
                }

                return updatedItem
            } else {
                return item
            }
        })

        store.items = updatedItems
      },
      deleteItem: (store, action) => {
        // v1 - Mutability
        store.items.splice(action.payload, 1)

        // v2 - Immutability
        const updatedItems = store.items.filter(item => item.id !== action.payload)
        store.items = updatedItems

      },
      addItem: (store, action) => {
        // v1 - Mutability
        store.items.push(action.payload)

        // v2 - Immutability
        store.items = [...store.items, action.payload]
      },
    },
})

export default pokemons