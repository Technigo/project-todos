import { createSlice } from '@reduxjs/toolkit'

 const taskList = {todos: [
     { id: 1, task: 'Do your task1', due:'Today', done: false},
     { id: 2, task: 'Do your task2', due:'Tomorrow', done:false},
     { id: 3, task: 'Do your task3', due:'Yesterday', done: false}
 ]}

//const taskList = ['task1', 'task2']




export const tasks = createSlice({
    name: 'tasks',
    initialState: taskList,
    reducers: {
        addTask: (state, action) => {
            //use this to make sure new is + 1 from the largest current element in the array
            const newId = Math.max(...state.todos.map(todo => todo.id)) + 1
            state.todos.push({ id:newId, task:action.payload.description, due:action.payload.date, done:false })
        },
        //mark done
        markDone: (state, action) => {
            //state.todos.find(element => element.id === action.payload).done = !state.todos.find(element => element.id === action.payload).done
            state.todos[action.payload].done = !state.todos[action.payload].done
        },
        markAll: (state) => {
            state.todos.map(todo => todo.done = true)
        }, 
        removeTask: (state, action) => {
            state.todos.splice(action.payload, 1)
            console.log('length', state.todos.length)
            console.log(state.todos)

        },
        removeAll: (state) => {
            state.todos.splice(0, state.todos.length)
        }
    }
})