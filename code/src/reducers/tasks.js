import { createSlice } from "@reduxjs/toolkit"
import uniqid from 'uniqid'

const tasks = createSlice({
    name: 'tasks',
    initialState: {
        items: [
            // {
            //     id: 'fjhjf',
            //     name: 'Do laundry',
            //     isCaught: false
            // },

            // {
            //     id: 'dsh',
            //     name: 'Go shopping',
            //     isCaught: false
            // }
        ],
    },
    reducers: {
        addTask: (store, action) => {
            const newTask = {
                id: uniqid(),
                text: action.payload,
                isCaught: false,
            }

            store.items = [...store.items, newTask]
        },


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