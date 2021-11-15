import  { createSlice } from "@reduxjs/toolkit"

const todos = createSlice({
    name: 'todos',
    initialState: {
        items: [] //an empty array for our undefined amount of todo-tasks.
    },
    reducers: { //reducers is an object where each property is a method to update the store
        
        //first method:
        addTodo: (store, action) => { //Since we need to pass data about what todo, we need two arguments in this recuder - current value of store and action.)
            console.log(store)
            console.log(action)
        } 
    }
})

export default todos