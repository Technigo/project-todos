import { createSlice } from "@reduxjs/toolkit"
import uniqid from 'uniqid'

const todos = createSlice({
    name: 'todos',
    initialState: {
        items: []
    },

    //creating several reducers to create the different function for the to-do-list
    reducers: {
        //reducer to create a new Todo
        addTodo: (store, action) => {
            const newTodo = {
                id: uniqid(),
                text: action.payload,
                isComplete: false,
            }

            store.items = [...store.items, newTodo]
        },
        //reducer to mark a todo as completed using an imutability approach
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
        //reducer to delete a todo using a mutability approach
        deleteTodo: (store, action) => {
            store.items.splice(action.payload, 1)
        } 
    }
})

export default todos