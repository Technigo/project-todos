import { createSlice } from '@reduxjs/toolkit'

export const list = createSlice({
    name: 'list',
    initialState: {
        // rename todos
        tasks:[
            {id: 1, name: 'Laundry', done: true},
            {id: 2, name: 'Dishes', done: false},
            {id: 3, name: 'Plants', done: true}
        ]
    },
    reducers: {
        //RENAME ADD TASK
        addTask: (state, action) => {
            state.tasks.push({ id: Date.now(), name: action.payload })
        },
        // showDone: (state, action) => {
        //     const doneTasks = state.tasks.filter((task) => task.done === true)
        //     console.log(doneTasks)

        //     if (doneTasks.length < 1) {
        //         return (
        //             'No done tasks :('
        //         )
        //     } else {
        //         state.tasks = doneTasks
        //     }
        // },
        // showTodo: (state, action) => {
        //     const todoTasks = state.tasks.filter((task) => task.done === false)

        //     if (todoTasks.length < 1) {
        //         return (
        //             "You're done!"
        //         )
        //     } else {
        //     }
        // },
        removeTask: (state, action) => {
            // find task & filter out
            // renamde state.tasks => todos
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)  
        },
        markDone: (state, action) => {
            // identify id
            // renamde state.tasks => todos
            const foundTodo = state.tasks.find((task) => task.id === action.payload)
            // toggle done / not do
            if (foundTodo) {
                foundTodo.done = !foundTodo.done
            }
        },
        removeAll: (state, action) => {
            state.tasks = []
            }
    }
})