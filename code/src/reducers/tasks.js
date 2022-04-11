import { createSlice } from "@reduxjs/toolkit";

const tasks = createSlice({
    name: 'tasks',
    initialState: {
     items: [
        { id: 1, text: 'Watch video on actions & reducers', complete: true },
        { id: 2, text: 'Follow Redux codealong', complete: true },
        { id: 3, text: 'Fork weekly assignment', complete: true },
        { id: 4, text: 'Create a todo app', complete: false }
        ],
    },
    reducers: {
        toggleItem: (store, action) => {
            store.items.forEach(item => {
                if(item.id === action.payload) {
                    item.complete = !item.complete
                }
            })
        },

        // removeItem: (store, action) => {
        //     const existingItem =  store.items.find((item) => item.id === action.payload.id)

        //     if (existingItem && existingItem.quantity === 1) {
        //         store.items = store.items.filter((item) => item.id !== action.payload.id)
        //     }else if (existingItem) {
        //         existingItem.quantity -= 1
        //     }
        // }

       // completeItem: (store, action) => {
            //             const existingItem =  store.items.find((item) => item.id === action.payload.id)
            
            //             if (existingItem) {
            //                 existingItem.quantity += 1
            //             } else {
            //                 store.items.push({...action.payload, quantity: 1})
            //             }
            //         },
    },


})

export default tasks