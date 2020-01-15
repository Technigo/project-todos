import { createSlice, combineReducers } from '@reduxjs/toolkit'

export const todos = createSlice({
    name: 'todos',
    initialState: [

        { id: 1, text: 'Shop', complete: true },
        { id: 2, text: 'Go to the gym', complete: true },
        { id: 3, text: 'Walk the dog', complete: true },
        { id: 4, text: 'Create a todo app', complete: false },
    ]
})

// reducers: {
//     addItem: (state, action) => {
//         const existingTodo = state.items.find((item) => item.id === action.payload.id)

//         if (todo) {
//             todo.quantity += 1
//         } else {
//             state.items.push({ ...action.payload })


//             // const { id, text, createdAt } = action.payload
//             // state.push({ id, text, createdAt, completed: false })
//         }
//     }
// }
