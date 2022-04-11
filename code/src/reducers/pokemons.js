import { createSlice } from '@reduxjs/toolkit'

const data = [

    {
    id: "gjkfhgkj938",
    name: "Bulbasaur",
    isCaught: false,
    },
    { 
    id: "gjkfhg33989",
    name: 'Charmander',
    isCaught: false
    },
]

const tasks = createSlice({
name: 'tasks',
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

export default tasks