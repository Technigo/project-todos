import { createSlice } from "@reduxjs/toolkit";
import uniqid from 'uniqid'


const todos = createSlice({
    name: 'todos',
    initialState: {
        items: []
    },
    reducers: {
        addTodo: (store, action) => {
            // const myStringifiedDate = JSON.stringify(new Date())
            // console.log(myStringifiedDate)
            const { input, dueDate, category } = action.payload
            const newTodo = {
                id: uniqid(),
                text: input,
                isComplete: false,
                createdAt: new Date().toString(),
                dueDate: dueDate.toString(),
                category
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
        },
        deleteAllTodos: (store) => {
            store.items = []
        },
        completeAllTodos: (store) => {
            const updatedItems = store.items.map(item => {
                const updatedTodos = {
                    ...item,
                    isComplete: true
                }
                return updatedTodos
            })
            store.items = updatedItems
        },
        showDone: (store) => {
            const updatedListDone = store.items.filter(item => {
                return item.isComplete === true
            })
            store.items = updatedListDone

        },
        showNotDone: (store) => {
            const updatedListNotDone = store.items.filter(item => {
                return item.isComplete === false
            })
            store.items = updatedListNotDone
        },
    }
})

export default todos