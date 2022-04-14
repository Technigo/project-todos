import { createSlice } from '@reduxjs/toolkit'

export const taskList = [
    { id: 'a1c2', task: 'Finish the assignment', tag: 'study', isDone: false },
    { id: 'e3f6', task: 'Buy milk', tag: 'shopping', isDone: false },
]

export const tasks = createSlice({
    name: 'tasks',
    initialState: {
        items: taskList,
        filter: []
    },
    reducers: {
        addTask: (store, action) => {
            const { task, tag } = action.payload
            const newTodo = {
                id: Date.now().toString(),
                task: task,
                tag: tag,
                isDone: false,
            }
            store.items = [...store.items, newTodo];
        },
        removeTask: (store, action) => {
            const updatedTasks = store.items.filter(
                (item) => item.id !== action.payload
            )
            store.items = updatedTasks
        },
        toggleDoneTask: (store, action) => {
            const updatedItems = store.items.map((item) => {
                if (item.id === action.payload) {
                    const updatedItem = {
                        ...item,
                        isDone: !item.isDone,
                    }
                    return updatedItem
                } else {
                    return item
                }
            })

            const updatedFilteredItems = store.filter.map((item) => {
                if (item.id === action.payload) {
                    const updatedItem = {
                        ...item,
                        isDone: !item.isDone,
                    }
                    return updatedItem
                } else {
                    return item
                }
            })

            store.items = updatedItems
            store.filter = updatedFilteredItems
        },
        filterDoneTasks: (store) => {
            const doneItems = store.items.filter(task => task.isDone)
            store.filter = doneItems
        },
        filterTodo: (store) => {
            const todoItems = store.items.filter(task => !task.isDone)
            store.filter = todoItems
        },
        allNewTasks: (store) => {
            store.filter = []
        }
    }
})


