import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
    name: 'todos',
    initialState: {
        items: []
    },
    reducers: {
        toggleComplete: (store, action) => {

            // Immutability
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

            //Mutability
           //store.items.forEach(todo => {
           //     if (todo.id === action.payload) {
           //         todo.isComplete = !todo.isComplete
            //    }
           // })


        },
        removeTodo: (store, action) => {
            // Immutability
            //const decreasedItems = store.items.filter(todo => todo.id !== action.payload)
          // store.items = decreasedItems

           // Mutability 
           store.items.splice(action.payload, 1)
        },
        addTodo: (store, action) => {
            //Immutablity
            //store.items = [...store.items, action.payload]

            //Mutability
            store.items.push(action.payload)
        } 
    }
})

export default todos