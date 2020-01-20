import { createSlice, combineReducers } from '@reduxjs/toolkit'
// import { AddTodoForm } from 'components/AddTodoForm';
 
const initialState = {
//items
todos:[
    { id: 1, name: 'Kids off to school', completeTodo: true },
    { id: 2, name: 'CrossFit', completeTodo: true },
    { id: 3, name: 'Walk the puppy', completeTodo: true },
    { id: 4, name: 'Create a to-do app', completeTodo: false }
    ]
}

export const todoTasks = createSlice({
    name: 'todoTasks',
    initialState,
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
        removeAll: () => {
            return initialState 
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


