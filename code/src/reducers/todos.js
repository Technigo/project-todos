import { createSlice } from "@reduxjs/toolkit"
import uniqid from 'uniqid'

const todos = createSlice({
    name: 'todos',
    initialState: {
        items: []
    },
    reducers: {
        addTodo: (store, action) => {
            const newTodo = {
                id: uniqid(),
                text: action.payload,
                isComplete: false,
            }

            store.items = [...store.items, newTodo]
        },

        toggleTodo: (store, action) => {
                const updatedItems = store.items.map((item) => {
                    if (item.id === action.payload) {
                        const updatedTodo = {
                            ...item,
                            isComplete: !item.isComplete
                        }
                        return updatedTodo
                    } else {
                        return item
                    }
                })

                store.items = updatedItems
        },
        
        deleteTodo: (store, action) => {
            store.items.splice(action.payload, 1)
        } 
    }
})

export default todos