import { createSlice } from "@reduxjs/toolkit"
import uniqid  from 'uniqid'

const todos = createSlice({
    name: 'todos',
    initialState:  { 
        items: [
            { id: 1, text: 'Watch video on actions & reducers', isComplete: true },
            { id: 2, text: 'Follow redux codealong', isComplete: true },
            { id: 3, text: 'Fork weekly assignment', isComplete: true },
            { id: 4, text: 'Create a todo app', isCcomplete: false },
        ],
    },

    reducers: {
        addTodo: (store, action) => {
            console.log('i am the store', store)
            console.log('i am the action', action)

            const newTodo = {
                id: uniqid(),
                text: action.payload,
                isComplete: false
            }

            store.items = [...store.items, newTodo]

        },
        toggleTodo: (store, action) => {
        
            const updatedItems = store.items.map((item) => {
                if (item.id === action.payload) {
                    const updatedTodo = {
                        ...item,
                        isComplete: !item.isComplete,
                    }
                    return updatedTodo
                } else {
                    return item
                }
            })

            store.items = updatedItems
        },
        deleteTodo: (store, action) => {
            const decreasedItems = store.items.filter(
                (item) => item.id !== action.payload
            )

            store.items = decreasedItems
        },
    },
})

export default todos
