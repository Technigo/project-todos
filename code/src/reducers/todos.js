import { createSlice } from '@reduxjs/toolkit'

//const [state, setState] = useSate()
const initialState = {
  items: []
}

const todos = createSlice({
  name: 'todos', 
  initialState, 
  reducers: {
     addTodo: (store, action) => {
        store.items.push(action.payload)
     },
     removeTodo: (store, action) => {
        store.items.pop(action.payload)

        //if (existingProduct && existingProduct.length > 0) {
        
        //  store.items.pop(action.payload)
        //store.items = store.items.filter((item) => item.id !== action.payload.id)

        //}
     },
     removeAll: (store, action) => {
      const existingProduct = store.items.findIndex((item) => item.id === store.id)
      store.items.splice(existingProduct)
     },
      toggleComplete: (store, action) => {
        const updatedItems = store.items.map((todo) => {
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
      }
  }
}) 

export default todos