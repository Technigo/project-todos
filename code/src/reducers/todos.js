/* eslint-disable */
/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
    name: 'todos',
    initialState: {
        items: []
    },
    reducers: {
        toggleComplete: (store, action) => {
            console.log(action)
            const updatedItems = store.items.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        isComplete: !todo.isComplete

                        
                    }

                } else {
                    return todo

                }
            })
            store.items = updatedItems
            
        },
        removeTodo: (store, action) => {
            const decreasedItems = store.items.filter(todo => todo.id !== action.payload)
            store.items= decreasedItems
        },
        addTodo: (store, action) => {
            store.items = [...store.items, action.payload]         
        },

        allDone: (store) => {
            const Done = store.items.map((todo) => {
                return {
                    ...todo,
                    isComplete: true
                }
            })
            store.items = Done
        }

    }
})

export default todos
