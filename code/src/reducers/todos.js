import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

const todos = createSlice({
  name: 'todos',
  initialState,
  // all reducers are objects, and all actions are going to be functions - objects can be object, array, function, string - sky is the limit. True weirdness of javascript
  // store is passed by Redux as onClick for javascript
  // if our method is about something very basic we do not need to pass in 'action' property. Quiz one of the methods, currentQuestion method - just increase by one. Then NO argument were needed, just store
  reducers: {
    addToDo: (store, action) => {
      const newTodosList = [...store.items, action.payload]
      store.items = newTodosList;
    },
    toggleComplete: (store, action) => {
      // console.log(store, action)
      const updatedItems = store.items.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        } else {
          return todo
        }
      })
      store.items = updatedItems
    },
    removeToDo: (store, action) => {
      store.items = store.items.filter((todo) => todo.id !== action.payload)
    },
    markAllTodos: (store) => {
      const markAll = store.items.map((todo) => {
          return {
              ...todo, 
              isComplete: true
          }
      })
      store.items = markAll
    }
  }
})

export default todos