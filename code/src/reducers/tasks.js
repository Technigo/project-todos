import { createSlice } from "@reduxjs/toolkit"

const tasks = createSlice({
    name: 'tasks',
    initialState: {
        items: [
            {
                id: 'fjhjf',
                name: 'Do laundry',
                isCaught: false
            },

            {
                id: 'dsh',
                name: 'Go shopping',
                isCaught: false
            }
        ],
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