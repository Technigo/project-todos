import { createSlice, combineReducers } from '@reduxjs/toolkit'
// import { AddTodoForm } from 'components/AddTodoForm';

export const todoTasks = createSlice({
    name: 'todoTasks',
    initialState: {
        //items
        todos:[

        { id: 1, name: 'Shop', completeTodo: true },
        { id: 2, name: 'Go to the gym', completeTodo: true },
        { id: 3, name: 'Walk the dog', completeTodo: true },
        { id: 4, name: 'Create a todo app', completeTodo: false }
        ]
    },
    reducers: {
        //creating an action
        addTodo: (state, action) => {
            state.todos.push({ id:Date.now(), name: action.payload })

        },
        removeItem: (state, action) => {
            // find 'cheese' or whatever item
            // remove it from the items array
            // id = 3
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        toggleCompleteTodo: (state, action) => {
            const checkedTodo = state.todos.find((todo) => todo.id === action.payload)

             // toggle the value of completeTodo
            if (checkedTodo) {
                checkedTodo.completeTodo = !checkedTodo.completeTodo
            }

        }
    }
})

// addTodo: (state, action) => {
//     let { text, id } = action.payload;
//     state.taskData.push({
//       id,
//       text,
//       complete: false,
//       important: false
//     });
//   }
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
