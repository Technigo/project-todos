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
            console.log("from statudTask")
            
        },
    }

})

// - Your app should list all todo tasks - completed or uncompleted --TaskList/Done
// - You should be able to mark an uncompleted task as complete --taskcomponent/notDone
// - You should be able to change a completed task back to uncomplete
// - You should be able to add new tasks
// - Your app should show a count of either all todos, or all uncomplete todos