import { createSlice } from '@reduxjs/toolkit'

// slice: name - initialState - set of reducers: set of methods thanks to it we can manipulate our store
// name - name is same as the file and variable
// why is initialState an object? state variables --- 
// whole store
const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: 1, description: 'First task', isComplete: false},
      { id: 2, description: 'Second task', isComplete: false},
      { id: 3, description: 'Third task', isComplete: false}
    ]
  },
  // all reducers are objects, and all actions are going to be functions - objects can be object, array, function, string - sky is the limit. True weirdness of javascript
  // store is passed by Redux as onClick for javascript
  // if our method is about something very basic we do not need to pass in 'action' property. Quiz one of the methods, currentQuestion method - just increase by one. Then NO argument were needed, just store
  reducers: {
    toggleComplete: (store, action) => {
      // console.log(store, action)
      // console.log(action)
      // took old store looped over it and create a new array if todo is the same as action.payload let's change isComplete to its reverse value
      const updatedItems = store.items.map(todo => {
        if (todo.id === action.payload) {
          //update isComplete property - this code is exactly the same as in happy thoughts
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
    },

    addToDo: (store, action) => {
      console.log(action) // type: "todos/addToDo" das stimmt! 
      const existingToDo = store.items.find((todo) => todo.id === action.payload.id) //vad ska stå här ? tror detta stämmer
      console.log(existingToDo) // proxy proxy 

      if (existingToDo) {
          existingToDo.quantity += 1
      } else {
          store.items.push({ ...action.payload, quantity : 1 })
      }
    }
  }
})
// items: id, content, completed

export default todos