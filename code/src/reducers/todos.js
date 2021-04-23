import { createSlice } from '@reduxjs/toolkit'

//constructing the slice
//difference between whole store and slice:
//variable: 

const todos = createSlice({
//set of methods we can manipulate the store
 //initial state, will be an object:
  //what we want to store in redux store
    // empty array, not to predefine any todos

    name: 'todos',
    initialState: {
        items: [
        { id: 1, description: 'Learn Redux in 3 weeks', isComplete: false, category: "Studies and work"},
        { id: 2, description: 'Daily meditation', isComplete: false, category: "Training and health"},
        { id: 3, description: 'Pay electric bill', isComplete: false, category: "Admin stuff"},
        { id: 4, description: 'Water the flowers', isComplete: false, category: "Other"}
        ]
    },
    reducers: {
        //in reducers we keep all the actions, hence what we want to happen
        //"store as an argument to be know the initial state from the store"
        //"action" includes two properties: 
        //type: internal identifier (kind of a key, so redux knows what reducer can call it)
        //payload: data as arguments, that tells what should be changed (kind of an id) 

        //we want to toggle complete and uncomplete todos
        // create a new array (map) with updated todos from store.items
        // if element from array has same id as id passed in action.payload, update the array 

        // This part of code is exactly the same as we would write :
   // This part of code is exactly the same as we would write :
                // {
                //   todo.id,
                //   todo.description,
                //   todo.isComplete,
                //   todo.isComplete: !todo.isComplete
                // }
                
                // Third property (line 25) will be overwritten by fourth (line 26),
                // so the final result is :
                // {
                //   todo.id,
                //   todo.description,
                //   todo.isComplete: !todo.isComplete
                // }

        toggleDone: (store, action) => {
            const updateTodo = store.items.map(todo => {

                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        isComplete: !todo.isComplete
                        } 
                    } else {
                        //returning array withough changes
                        return todo;
                    }
                })
                //To update the store-items property and assign a new value:
                store.items = updateTodo

            },
        //Add todo item
        //When todo is dispatched with a new payload including the item object and 
        //pushes to a new array, defined in AddTodo.js

        addToDo: (store, action) => {
            const addItem = action.payload
            store.items.push(addItem)
        },

        // Filtering out all Id's which is not mapping 
        //we are passing in the payload todoId in TodoList 

        removeTodo: (store, action) => {
          const todoId = action.payload
          store.items = store.items.filter(e => e.id !==todoId)
        },

        //Clearing all the todos in the list 
        removeAll: (store) => {
            store.items = []
        },

        // leftTodo: (store) => {
        //     store.items = store.items.filter(e => e.isComplete === false)
        // }


    }
})

export default todos;