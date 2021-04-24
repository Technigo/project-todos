import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
   /* { id: 1, description: 'Task 1', isComplete: false },
      { id: 2, description: 'Task 2', isComplete: false },
      { id: 3, description: 'Task 3', isComplete: false }*/
    ]
  },
  reducers: {
   
    toggleComplete: (store, action) => {
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
    removeTodo: (store, action) => {
      const decreasedItems = store.items.filter(todo => todo.id !== action.payload)

      store.items = decreasedItems
    },
    addTodo: (store, action) => {
      store.items = [...store.items, action.payload]
    },
    completeAllTodos: (store, action) => {
      const itemsAllCompleted = store.items.map((task) => {
        return {
          ...task,
          isComplete: true
        }
      })
      store.items = itemsAllCompleted
    }
  }
})

export default todos