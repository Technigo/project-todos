import { createSlice } from '@reduxjs/toolkit'

 const taskList = {todos: [
     { id: 1, task: 'Do your task1', done: false},
     { id: 2, task: 'Do your task2', done: false},
     { id: 3, task: 'Do your task3', done: false}
 ]}

//const taskList = ['task1', 'task2']




export const tasks = createSlice({
    name: 'tasks',
    initialState: taskList,
    reducers: {
        addTask: (state, action) => {
            console.log('test')
            const newId = state.todos.length + 1
            state.todos.push({ id:newId, task:action.payload, done:false })
        }
        //mark done
        //remove task
        //remove all
    }
})