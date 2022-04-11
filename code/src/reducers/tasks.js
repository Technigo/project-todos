import { createSlice } from "@reduxjs/toolkit"
import uniqid from 'uniqid'

const tasks = createSlice({
    name: 'tasks',
    initialState: {
        items: [
            // {
            //     id: 'fjhjf',
            //     name: 'Do laundry',
            //     isCaught: false
            // },

            // {
            //     id: 'dsh',
            //     name: 'Go shopping',
            //     isCaught: false
            // }
        ],
    },
    reducers: {
        addTask: (store, action) => {
            const newTask = {
                id: uniqid(),
                text: action.payload,
                isCaught: false,
            }

            store.items = [...store.items, newTask]
        },

        deleteTask: (store, action) => {
            const deletedTasks = store.items.filter((taskItem) => taskItem.id !== action.payload)
            store.items = deletedTasks
        },

        toggleItem: (store, action) => {
            const updatedTaskItems =
            store.items.map((item) => {
                if (item.id === action.payload) {
                  const updatedTask = {
                      ...item,
                      isCaught: !item.isCaught//item.isCaught = !item.isCaught
                  }
                  return updatedTask
                } else {
                    return item
                }
            })
            store.items = updatedTaskItems
        },

        allTasksDone: (store) => {
            const allDone = store.items.map((task) => {
                return {
                    ...task,
                    isCaught: true
                }
            })
            store.items = allDone
        }
    },
})

export default tasks