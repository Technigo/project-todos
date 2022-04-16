import { createSlice } from '@reduxjs/toolkit'

const data = [
    {
        id: 'sfsegnege',
        text: 'Be proud of myself',
        complete: false,
    },
    {
        id: 'egvkmeobe',
        text: 'Smile more',
        complete: false,
    },
]

const tasks = createSlice({
    name: 'tasks',
    initialState: {
        items: data,
    },
    reducers: {
        toggleTask: (store, action) => {
        
        // v1 - Mutability
        store.items.forEach(items => {
            if (items.id === action.payload) {
                items.complete = !items.complete
            }
        })

        // v2 - Immutability
        // const updatedItems = store.items.map(item => {
        //     if (item.id === action.payload) {
        //         const updatedItem = {
        //             ...item,
        //             complete: !item.complete
        //         }

        //         return updatedItem
        //     } else {
        //         return item
        //     }
        // })

        // store.items = updatedItems
      },
      deleteTask: (store, action) => {
        // v1 - Mutability
        store.items.splice(action.payload, 1)

        // v2 - Immutability
        // const updatedItems = store.items.filter(item => item.id !== action.payload)
        // store.items = updatedItems

      },
      addTask: (store, action) => {
        // v1 - Mutability
        store.items.push(action.payload)

        // v2 - Immutability
        // store.items = [...store.items, action.payload]
      },
    },
})

export default tasks