import  { createSlice } from "@reduxjs/toolkit"
import uniqid from 'uniqid'

const todos = createSlice({
    name: 'todos',
    initialState: {
        items: [] //an empty array for unknown amount of todo-tasks (the store - store.items)
    },
    
    reducers: { //reducers is an object where each property is a method to update the store
        
        //first method:
        addTodo: (store, action) => { //Since we need to pass data about what todo, we need two arguments in this recuder - current value of store and action)

            const newTodo = {
                id: uniqid(),
                text: action.payload,
                isComplete: false
            }

            store.items = [...store.items, newTodo] //Updating the store (immutability approach)
        },

        //second method:
        toggleTodo: (store, action) => {
             
            const updatedItems = store.items.map(item => {
                console.log(item.id, action.payload)
                if (item.id === action.payload) { //is item.id matching with the right todo (action.payload) 
                    const updatedTodo = {
                        ...item, // short for: "id: item.id, text: item.text, isComplete: item.isComplete"
                        isComplete: !item.isComplete,
                    }
                    return updatedTodo

                } else { //if not, return item
                    return item
                }
            })

            store.items = updatedItems
        },

        //third property and method:
        deleteTodo: (store, action) => {

            const decreasedItems = store.items.filter(item => item.id !== action.payload) //if id equals to action.payload it's not included in this array

            store.items = decreasedItems
        }

    },
})


export default todos