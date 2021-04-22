import { createSlice } from '@reduxjs/toolkit'

// to-dos Slice
const todos = createSlice ({
    name: 'todos',
    initialState: {
    tasks: [
      {id:1, description:'Cooking dinner', isComplete: false},
      {id:2, description:'Doing dishes', isComplete: true},
      {id:3, description:'Cleaning the rooms', isComplete: false}
    ]
},
    reducers: {
      //Creating the first action: a function-property inside our object reducer
      //"store"  should ALWAYS be passed as an argument, "action" only when needed
      toggleComplete: (store, action) => {
      //we create a copy of the original array   
        const updatedItems = store.tasks.map(todo => {
          if (todo.id === action.payload) {
           
            //If the task we are looping over is the same one as the one we just clicked 
            //the isComplete property should be updated
            //Otherwise return the same task
            //After the looping the store will be updated with the new store/array
            return {
              ...todo,
              isComplete: !todo.isComplete
            }
          } else {
            return todo;
          }
        })
        store.tasks = updatedItems
      }
    }
})

export default todos;