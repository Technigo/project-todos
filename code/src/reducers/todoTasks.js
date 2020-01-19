import { createSlice, combineReducers } from '@reduxjs/toolkit'

const initialState = {
    //items
    todos: [
        { id: 1, text: 'Shop', complete: true },
        { id: 2, text: 'Go to the gym', complete: true },
        { id: 3, text: 'Walk the dog', complete: true },
        { id: 4, text: 'Create a todo app', complete: false },
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





