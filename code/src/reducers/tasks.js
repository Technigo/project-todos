import { createSlice } from '@reduxjs/toolkit'

const data = [
    {
        id: 'sfsegnege',
        name: 'Write my first task',
        isDone: false,
    },
    {
        id: 'egvkmeobe',
        name: 'Write my second task',
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
        
        // v1 - Mutability
        store.items.forEach(items => {
            if (items.id === action.payload) {
                items.isDone = !items.isDone
            }
        })

        // v2 - Immutability
        // const updatedItems = store.items.map(item => {
        //     if (item.id === action.payload) {
        //         const updatedItem = {
        //             ...item,
        //             isDone: !item.isDone
        //         }

        //         return updatedItem
        //     } else {
        //         return item
        //     }
        // })

        // store.items = updatedItems
      },
      deleteItem: (store, action) => {
        // v1 - Mutability
        store.items.splice(action.payload, 1)

        // v2 - Immutability
        // const updatedItems = store.items.filter(item => item.id !== action.payload)
        // store.items = updatedItems

      },
      addItem: (store, action) => {
        // v1 - Mutability
        store.items.push(action.payload)

        // v2 - Immutability
        // store.items = [...store.items, action.payload]
      },
    },
})

export default tasks