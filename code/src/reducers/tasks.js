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
            // console.log('action', action)
            // console.log('state', state)

            //id: Date:Now() gives it a millisecond based id
            state.items.push({ id: Date.now(), text: action.payload })

            //Annas code
            // state.tasks.push({ ...{ id: 0, text: action.payload, complete: false } })
        },

        toggleNeedsMore: (state, action) => {
            console.log('action', action)
            console.log('state', state)
            console.log(action.payload)

            //find tasks in the array
            const foundTask = state.items.find((item) => item.id === action.payload)
            // toggle the value of needsMore in Task.js
            console.log(JSON.stringify(foundTask))

            if (foundTask) {
                foundTask.needsMore = !foundTask.needsMore
            }
        },

        // // when checkbox is checked the counter should decrese
        completedTask: (state, action) => {
            console.log('action', action)
            console.log('state', state)

            // state.items = state.items.filter((item) => item.id !== action.payload)
            // decrement = () => {
            //     this.setState({
            //       count: this.state.count - 1
            //     });
            //   }
            // // if (task.id === id)
            // //     task.completed = !task.completed;
            // state.items.push({ ...{ id: 0, text: action.payload, complete: true } })
            const doneTask = state.items.find((item) => item.id === action.payload)
            // toggle the value of needsMore in Task.js
            console.log(JSON.stringify(doneTask))

            if (doneTask) {
                doneTask.needsMore = !doneTask.needsMore
            }

        },

        removeTask: (state, action) => {
            console.log(state)
            console.log(action)
            //finds the task
            //remove it from the array
            //id= ....
            state.items = state.items.filter((item) => item.id !== action.payload)
        },

        // this empty the array when the <NEW DAY button> is clicked
        emptyTasks: (state, action) => {
            console.log('action', action)
            console.log('state', state)

            state.items = state.items.splice(0, action.payload)
        },
    }

})