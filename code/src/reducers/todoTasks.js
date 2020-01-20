import { createSlice, combineReducers } from '@reduxjs/toolkit'
// import { AddTodoForm } from 'components/AddTodoForm';

const initialState = {
    //items
    todos: [
        { id: 1, name: 'Create To-do app', completeTodo: true },
        { id: 2, name: 'Plan family dinner', completeTodo: true },
        { id: 3, name: 'Invite friends to Salsa class', completeTodo: true },
        { id: 4, name: 'Book yoga retreat', completeTodo: false },
        { id: 5, name: 'Plan a new trip with friends', completeTodo: false }
    ]
}

export const todoTasks = createSlice({
    name: 'todoTasks',
    initialState,
    reducers: {
        //creating an action
        addTodo: (state, action) => {
            state.todos.push({ id: Date.now(), name: action.payload })

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





