import { createSlice } from '@reduxjs/toolkit'

const taskList = [
    { id: 1, taskText: 'Get milk', isDone: false },
    { id: 2, taskText: 'Clean', isDone: false  },
    { id: 3, taskText: 'Go running', isDone: false  }
]

const completedTasks = [
    { id: 4, taskText: 'Gheekrjer', isDone: true },
]

const initialState = {
    taskList,
    completedTasks
}

export const tasks = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        toggleIsDone: (store, action) => {

            const updatedTasks = store.taskList.map(task => {
                if (task.id === action.payload ) {
                    return {
                        ...task,
                        isDone: !task.isDone
                    }
                } else {
                   return task
                }
            })
            store.taskList = updatedTasks
        },



        // toggleIsDone: (store, action) => {

            // const updatedTasks = store.taskList.map(task => {
            //     if (task.id === action.payload ) {
            //         return {
            //             task,
            //             isDone: !task.isDone
            //         }
            //     } else {
            //        return task
            //     }
            // })
            // store.completedTasks = updatedTasks
    
            // const { taskId } = action.payload
            // const completedTask = store.taskList.find((task) => (task.id === taskId))
            // console.log(completedTask)

            // store.taskList.push({
            //     completedTask
            //     // taskId,
            //     // taskList,
            //     // completedTasks,
            //     // isFinished;
            // })

            // store.completedTasks.push({
            //     ...store.completedTasks,
            //     completedTask,
            //     taskId
            // })

            // console.log(completedTasks)








            // const remainingTasks = store.taskList.map(task => {
            //     if (task.id === action.payload ) {
            //         return {
            //             ...task,
            //             isDone: !task.isDone
            //         }
            //     } else {
            //        return task
            //     }
            // })
            // store.taskList = remainingTasks
            // store.completedTasks = FinishedTasks

            // const moveCompletedTasks = store.taskList.map(task => {
            //     if (task.isDone === true) {
            //         console.log('hurra')
            //         return {
            //             ...task
            //         }
           
            //     } else {
            //             console.log('not true')
            //     }
            // })

            // store.completedTasks = moveCompletedTasks
            

        // },


        // displayCompleted: (store, action) => {

        //     const moveCompletedTasks = store.taskList.map(task => {
        //         if (task.isDone === true) {
        //                 console.log('hurra')
        //         } else {
        //                 console.log('not true')
        //         }
        //     })
        //     // store.completedTasks = moveCompletedTasks
        // },

        addTask: (store, action) => {
            store.taskList = [...store.taskList, action.payload]
            // store.taskList.push(action.payload)
        }
    }
})