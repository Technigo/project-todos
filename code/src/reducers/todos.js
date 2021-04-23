//Slice method
import { createSlice } from '@reduxjs/toolkit'

//Object with three properties: name, initialstate, reducers
const todos = createSlice({
    name: 'todos',
    initialState: {
        items: [
            { id: 1, description: 'Make a test task', isComplete: false},
            { id: 2, description: 'Test if test task works', isComplete: false},
            { id: 3, description: 'Be happy that test task works', isComplete: false}
        ]
    },
    reducers: {

        addTodo: ( store, action) => {
            store.items = [...store.items, action.payload]
        },

        removeTodo: (store, action) => {
            //Accepting everything except the one that does not match
            const decreasedItems = store.items.filter(todo => todo.id !== action.payload)
            store.items = decreasedItems
        },

        completeAllTodo: (store, action) => {
            const completedItems = store.items.map(todo => {
                return {
                    ...todo,
                    isComplete: !todo.isComplete
                }
            })
            store.items = completedItems
        },
        
        //Redux is always passing store as argument in order to update it
        //add action to know which task to toggle.
        toggleComplete: (store, action) => {
            // console.log(store, action)
            // console.log(action)

            const updatedItems = store.items.map(todo => {
                if (todo.id === action.payload) {
                    //change false to true
                    //return current todo as it was (id and description) but with isComplete oposite to what previous state was. 
                    return {
                        ...todo,
                        isComplete: !todo.isComplete
                    }
                } else {
                    //leave it as it was
                    return todo
                }
            })
            store.items = updatedItems
        }
    }
})
//Export slice
export default todos