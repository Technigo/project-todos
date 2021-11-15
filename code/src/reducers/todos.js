import { createSlice } from "@reduxjs/toolkit"
import uniqid  from 'uniqid'

// a slice takes one argument - an object!
// every slice contains of three properties, name initialState and reducers

const todos = createSlice({
    name: 'todos',
    initialState:  { 
        items: [],
    },

    // Three reducers- addTodo toggleTodo and deleteTodo

    reducers: {
        addTodo: (store, action) => {
            console.log('i am the store', store)
            console.log('i am the action', action)

            const newTodo = {
                id: uniqid(),
                text: action.payload,
                isComplete: false
            }
            // store.items.push(data)
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
