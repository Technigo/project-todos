import { createSlice } from '@reduxjs/toolkit'

const taskList = [
    {id: 0, title: 'Laundry', status: false},
    {id: 1, title: 'Shopping', status: true},
    {id: 2, title: 'Paint', status: false},

]

export const tasks = createSlice({
    name: 'tasks',
    initialState: {
    items: taskList
    },
    reducers: {
        addTask: (state, action) => {
            state.items.push(action.payload)
        },

        toggleState: (store, action) => {

        store.items.forEach(item => {
            if (item.id === action.payload){
                item.status = !item.status
            }
        })   

        }
    }

}
)