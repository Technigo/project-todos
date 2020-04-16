import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
    name: 'tasks',
    initialState: {
        items: []
    },

    //***** here is the Actions *****/
    reducers: {
        //state = current state
        addTask: (state, action) => {

            //id: Date:Now() gives it a millisecond based id
            state.items.push({ id: Date.now(), text: action.payload })
        },

        toggleCompleted: (state, action) => {
            // console.log('action', action)
            // console.log('state', state)
            // console.log(action.payload)

            //find tasks in the array
            const foundTask = state.items.find((item) => item.id === action.payload)
            // toggle the value of completed in Task.js
            // console.log(JSON.stringify(foundTask))

            if (foundTask) {
                // foundTask.needsMore = !foundTask.needsMore
                foundTask.completed = !foundTask.completed
            }
        },

        // // when checkbox is checked the counter should decrese
        completedTask: (state, action) => {

            const doneTask = state.items.find((item) => item.id === action.payload)
            // toggle the value of completed in Task.js
            // console.log(JSON.stringify(doneTask))

            if (doneTask) {
                doneTask.completed = !doneTask.completed
            }
        },

        removeTask: (state, action) => {

            //finds the task
            //remove it from the array
            //id= ....
            state.items = state.items.filter((item) => item.id !== action.payload)
        },

        // this empty the array when the <Clear All button> is clicked
        emptyTasks: (state, action) => {

            state.items = state.items.splice(0, action.payload)
        },
    }

})