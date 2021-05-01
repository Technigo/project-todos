import { createSlice } from '@reduxjs/toolkit'

const tasks = createSlice({
    name: 'tasks',
    initialState: {
        items: []
    },
    reducers: {
        toggleComplete: (store, action) => {
            const updatedItems = store.items.map(task =>{
                if (task.id === action.payload){
                    return {
                        ...task,
                        isComplete: !task.isComplete
                    }
                } else {
                    return task
                }
            })
            store.items = updatedItems
        },
        removeTask: (store, action) => {
            store.items.splice(action.payload, 1)
        },
        addTask: (store, action) => { //store is state of the slice , empty array
            store.items = [...store.items, action.payload]
        },
        deleteAll: (store,action) => {
            store.items=[]
        }
    }
})

export default tasks