import { createSlice } from "@reduxjs/toolkit"

const amount = createSlice({
     name: 'amount',
     initialState: {
         items: []
     }, 
     reducers: {
        addTodoItem: (store, action) => {
            console.log(action)

            // const existingTodo = store.items.find((todolist) => todolist.id === action.payload.id)

            // if(existingTodo) {
            //     existingTodo.quantity += 1
            // } else {
            //     store.items.push({ ...action.payload, quantity: 1})
            // }

         },
    },
})

export default amount