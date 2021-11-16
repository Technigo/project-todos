import { createSlice } from "@reduxjs/toolkit";
import uniqid from 'uniqid'
import moment from "moment";

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
                createdAt: moment().startOf('hour').fromNow()
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
            store.items = decreasedItems
        }
    }
})

export default todos