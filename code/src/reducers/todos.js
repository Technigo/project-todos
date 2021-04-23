import { createSlice } from '@reduxjs/toolkit'

  const todos = createSlice({
    name: "todos",
    initialState: {
      items: [],
    },
    reducers: {
      // store is always passed, dont need to write it, action we need to pass by ourself
      toggleComplete: (store, action) => {        
        const updateItem = store.items.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo, 
              isComplete: !todo.isComplete
            }
          } else {
            return todo
          }
        })
        store.items = updateItem
      },
      addTodo: (store,action) => {
        store.items = [...store.items,action.payload]
      },
      removeTodo: (store, action) => { 
        const removedItems = store.items.filter(todo => todo.id !== action.payload)           
        store.items = removedItems
          },
      completeAll: (store) => {
        const allComplete = store.items.map((todo) => {
          return {
            ...todo,
            isComplete: true
          }
        }          
        )
        store.items = allComplete        
      }     
        }      
    })
export default todos
