import { createSlice } from '@reduxjs/toolkit'

const data = [
    {
        id: '55555',
        name: 'Example Todo',
        isDone: false,
    },
]

const tasks = createSlice({
    name: 'tasks',
    initialState: {
        items: data,
    },
    
    reducers: {
        toggleItem: (store, action) => {
        // v1 mutability
            store.items.forEach((item) => {
                if (item.id === action.payload) {
                item.isDone = !item.isDone
                  }
            })

            //v2 immutability
            // const updatedItems = store.items.map(item => {
            //     if (item.id === action.payload) {
            //         const updatedItem = {
            //             ...item, 
            //             isCaught: !item.isCaught
            //         }
            //     } else { 
            //         return item
            //     }
            // })
            // store.items = updatedItems

        },
        deleteItem: (store, action) => {
            //v1 mutability
            store.items.splice(action.payload, 1)

            //v2 immutability, filter and assign new var
            // const updatedItems = store.items.filter(item => item.id !== action.payload)
            // store.items = updatedItems

        },
        addItem: (store, action) => {
            //v1 - Mutability
            store.items.push(action.payload)

            //v2 Immutability
            // store.items = [...store.items, action.payload]
        },
    },
})

export default tasks;
