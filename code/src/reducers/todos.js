import { createSlice } from '@reduxjs/toolkit'

//Slice
const todos = createSlice ({
    name: 'todos',
    initialState: {
    tasks: [],
    inputValue:''
},

    reducers: {
      //Creating the first action: a function-property inside our object reducer
      //"store"  should ALWAYS be passed as an argument, "action" only when needed
      toggleComplete: (store, action) => {
      
        //we create a copy of the original array   
        const updatedTasks = store.tasks.map(todo => {
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
        store.tasks = updatedTasks
      },

      removeTodo: (store, action) => {
        const decreasedTasks = store.tasks.filter(todo => todo.id !== action.payload)
        store.tasks = decreasedTasks
      },

      addTodo: (store, action) => {
        store.tasks = [...store.tasks, action.payload]
      }
    }
})

export default todos;