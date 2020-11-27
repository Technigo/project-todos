import {createSlice} from '@reduxjs/toolkit'

const taskList = [
    {id: 1, text: 'My first todo', complete: true, date: new Date().getTime()},
    {id: 2, text: 'My second todo', complete: false, date: new Date().getTime()},
    {id: 3, text: 'My third todo', complete: true, date: new Date().getTime()},
    {id: 4, text: 'My fourth todo', complete: false, date: new Date().getTime()}
]

export const tasks = createSlice({
    name: 'tasks',
    initialState: {
        items: taskList},
    reducers: {
        addTask: (state, action) => {
            const latestTaskId = state.items.map(task => task.id)
            state.items.push({
                id: (state.items.length > 0 ? Math.max(...latestTaskId) +1 : 1), 
                text: action.payload, 
                complete: false,
                date: new Date().getTime()});
        },

        clearTasks: (state) => {
            state.items.length = 0;
        },

        removeThisTask: (state, action) => {
            const {id} = action.payload;
            const task = state.items.find(t => t.id === id)
            state.items.splice(state.items.indexOf(task),1);
        },

        markComplete: (state, action) => {
            const {id} = action.payload;
            const task = state.items.find(t => t.id === id)
            if (task) {
                task.complete = !task.complete;
            }
        },
    
    }
})