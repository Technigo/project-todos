import { createSlice } from '@reduxjs/toolkit'

const data = [
    {
        id: 1, text: 'Go for a walk', isComplete: false
    },
    {
        id: 2, text: 'Read a book', isComplete: true
    },
    {
        id: 3, text: 'Cook something delicious', isComplete: false
    },
    {
        id: 4, text: 'Update your LinkedIn', isComplete: false
    }
]

const todos = createSlice({
    name: 'todos',
    initialState: {
        toDoList: data
    },
    reducers: {
        toggleComplete: (store, action) => {
            store.toDoList.forEach((item) => {
                if (item.id === action.payload) {
                    item.isComplete = !item.isComplete
                }
            })
        },
        deleteItem: (store, action) => {
            store.toDoList.splice(action.payload, 1)
        },
        removeAll: (store, action) => {
            console.log(store)
            console.log(action)
        },
    }
})

export default todos;