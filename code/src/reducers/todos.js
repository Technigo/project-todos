import { createSlice } from '@reduxjs/toolkit'

// how our state will look like, empty array, this sill start with tree things inside. array of objects


export const todos = createSlice({
  name: 'todos',
  initialState: {
    username: 'Van',
    items: [ 
       {id:1 ,
        text: 'todo 1'} , 
        {id:2 ,
        text: 'todo 2'}, 
       {id:3 ,
        text: 'todo 3'} , 
    
     ],
  },
});











// import { createSlice } from '@reduxjs/toolkit'


// const taskData = [
//     { id: 1, text: 'Watch video on actions & reducers', complete: true },
//     { id: 2, text: 'Follow redux codealong', complete: true },
//     { id: 3, text: 'Fork weekly assignment', complete: true },
//     { id: 4, text: 'Create a todo app', complete: false },
// ]




// export const todoTasks = createSlice({
//   name: 'task',
//   initialState: taskData
   
// })

// reducers:{
//     // here we create our actions in our reducer(addItem) is the action.
//    addItem: (state, action) => {
//        const existingProduct = state.items.find((item) => item.id === action.payload.id)
       
//        if (existingProduct) {
//            // increment quantity
//            existingProduct.quantity += 1

//        } else {
//            state.items.push({ ...action.payload, quantity: 1 })

//        }
// },
//    removeItem: (state, action) => {    
//        const existingProduct = state.items.find((item) => item.id === action.payload.id)

//        if (existingProduct && existingProduct.quantity === 1){
//            // remove it if its the last one
//            state.items = state.items.filter((item) => item.id !== action.payload.id)

//        } else if (existingProduct) {
//            existingProduct.quantity -= 1
//        }


// }

// }
// })
