import { createSlice } from "@reduxjs/toolkit";
import uniqid from 'uniqid'


const todos = createSlice({
    name: 'todos',
    initialState: {
        items: [],
    },
    reducers: {
        addTodo: (store, action) => {
            // const myStringifiedDate = JSON.stringify(new Date())
            // console.log(myStringifiedDate)
            const newTodo = {
                id: uniqid(),
                text: action.payload,
                isComplete: false,
                createdAt: new Date().toString()
            }
            // add to the state
            store.items = [...store.items, newTodo]
        },
        toggleTodo: (store, action) => {
            const updatedItems = store.items.map(item => {
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
            const decreasedItems = store.items.filter((item) =>
                item.id !== action.payload
            )
            console.log(decreasedItems)
            store.items = decreasedItems
        },
        deleteAllTodos: (store) => {
            store.items = []
        },
        completeAllTodos: (store) => {
            const updatedItems = store.items.map(item => {
                const updatedTodos = {
                    ...item,
                    isComplete: !item.isComplete
                }
                return updatedTodos
            })
            store.items = updatedItems
        }
    }
})

export default todos