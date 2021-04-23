// In the slice we need to import 
import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
    name: 'todos', // Good practice to name the slice as the varible itself
    initialState: { // An object with an array with an object with id, description and isComplete
        items: [ // Name, initialState and recucers are standard names, items is not.
            { id: 1, description: 'First Task', isComplete: false }, // We start from some todos but otherwise it should be an empty array
            { id: 2, description: 'Second Task', isComplete: true },
            { id: 3, description: 'Third Task', isComplete: false }
        ]
    },
    reducers: { // an object - therefore we need to write a property that's a function
        toggleComplete: (store, action) => { // redux is always passing an argument (store) here we also need an action property
            const updatedItems = store.items.map(todo => {
                if (todo.id === action.payload) {
                    // Update isComplete property
                    return {
                        ...todo,
                        isComplete: !todo.isComplete
                    }
                } else {  
                    // leave it as it was 
                    return todo
                }
            })

            store.items = updatedItems  // We create a new store that includes the new item
        },
        removeTodo: (store, action) => {
            const decreasedItems = store.items.filter(todo => todo.id !== action.payload)

            store.items = decreasedItems
        },
        addTodo: (store, action) => {
            store.items = [...store.items, action.payload]
        },
    }
})

export default todos // Since we are only exporting a todo slice, nothing else.


