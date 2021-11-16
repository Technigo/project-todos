import { createSlice } from '@reduxjs/toolkit'
import uniqid, { time } from 'uniqid' // used to generate an absolutely unique id

const todos = createSlice({
    // every slice needs 3 properties: name, initialState and reducer 
    name:'todos',
    initialState: {
        items: [],
    },
    reducers: {
        //an object, each property is one method to update the store.
        // Each reducer is a property which is a function, always have 2 arguments, current value of store and an action 
        addTodo: (store, action) => {
            
            console.log(action) // consists of payload (the data) and type
           

            const newTodo ={
                id: uniqid(),// needs to be absolutely unique
                text: action.payload,
                isComplete: false // needed so that we know
            }

            // immutable approach; a completely new array with the values from previous array plus extra element
            store.items = [...store.items, newTodo]
        },
        // the next reducer is responsible for triggering the isComplete property from true to false or false to true
        toggleTodo: (store, action) => {
            // payload will be action.id
            //immuteable approach, going to create a new array with all todos updated
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
            store.items=updatedItems
        },
        // This reducer is responsible for deleting a Todo
        deleteTodo: (store, action) => {
            // immuteable approach, will pass the id in action.payload, should use filter, prepare new array and pull most items, but
            //leave behind the deleted element
            const decreasedItems = store.items.filter((item) => item.id !== action.payload)
            store.items = decreasedItems
        }
    }
})
export default todos