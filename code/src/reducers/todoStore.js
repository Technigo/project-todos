import {createSlice} from '@reduxjs/toolkit'

const myInitialState = {
    todos: [{id:1, task:'example task', taskDone: false}]
}
export const todoStore = createSlice({
    name:'todoStore',
    initialState: myInitialState,
    reducers: {
        createTask: (state, action) => {
            console.log(action)
            state.todos.push({ ...action.payload, taskDone: false})
        },
        
        removeTask: (state, action) =>{
            console.log("from removeTask")
            const currentTask = action.payload.id
            state.todos = state.todos.filter((task)=>(task.id !== currentTask))
        },

        statusTask: (state, action) =>{
            console.log("from removeTask")
        },
    }

})