import { createSlice } from '@reduxjs/toolkit'

const data = [
    {
      id: "lahjs275234x",
      name: "Bulbasaur",
      isCaught: false,
    },
    {
      id: "lahjs27kjahs24x",
      name: "Charmander",
      isCaught: false,
    },
  ];
  

const pokemons = createSlice ({
    name:'pokemons',
    initialState: {
        items:data, 
    },
    reducers: {
        toggleItem: (store, action) => {
            store.items.forEach(item => {
                if(item.id === action.payload) {
                    item.isCaught = !item.isCaught
                }
            });
        },
        deleteItem: (store, action) => {
            store.items.splice(action.payload, 1)
        },
        addItem: (store, action) => {
            store.items.push(action.payload)
        }
    }

})

export default pokemons
