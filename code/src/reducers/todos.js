import { createSlice } from '@reduxjs/toolkit'

const toDoItems = [
    {
        id: 1, text: 'Go for a walk', complete: false
    },
    {
        id: 2, text: 'Read a book', complete: true
    },
    {
        id: 3, text: 'Cook something delicious', complete: false
    },
    {
        id: 4, text: 'Update your LinkedIn', complete: false
    }
]

const todos = createSlice({
    name: 'todos',
    initialState: toDoItems,
    reducers: {
        removeAll: (store, action) => {
            console.log(store)
            console.log(action)
        },
        toggleComplete: (store, action) => {
            store.toDoItems.forEach((item) => {
                if (item.id === action.payload) {
                    item.complete = !item.complete
                }
            })
        }
    }
})

export default todos;