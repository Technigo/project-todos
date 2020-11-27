

import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const initialState = {
    items: []
}

export const todos = createSlice({
    name: "todos",
    initialState,
    reducers: {
        // Add item action is a bit different that that one created during the lecture
        // It's because we create id with uniqid package
        // And also because we use reducer-prepare syntax.
        // For further reference over that topic, check out
        // https://redux.js.org/tutorials/essentials/part-4-using-data#storing-dates-for-posts
        addItem: {
            reducer(state, action) {
                state.items = [...state.items, action.payload];
            },
            prepare(name) {
                return {
                    payload: {
                        id: uniqid(),
                        name: name,
                        isCompleted: false
                    }
                };
            }
        },
        removeItem: (state, action) => {
            const filteredItems = state.items
                .filter(item => item.id !== action.payload);

            state.items = filteredItems;
        },
        toggleComplete: (state, action) => {
            const updatedArray = state.items.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        isCompleted: !item.isCompleted
                    };
                } else {
                    return item;
                }
            });

            state.items = updatedArray;
        },
    },
});












// import uniqid from 'uniqid';

// how our state will look like, empty array, this will start with tree things inside. array of objects
// this is a slice.....







// compare this code:

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
