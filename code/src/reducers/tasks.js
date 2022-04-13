import { createSlice } from '@reduxjs/toolkit'

export const taskList = [
    { id: 'a1c2', task: 'Finish the asignment', tag: 'study', isDone: false },
    { id: 'e3f6', task: 'Buy milk', tag: 'shopping', isDone: false },
]

export const tasks = createSlice({
    name: 'tasks',
    initialState: {
        items: taskList,
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
            store.items = updatedItems
        }
    }
})



// const onContentValueChange = (event) => {
//   const { name, value } = event.target;
//   setContent((prev) => {
//     return {
//       ...prev,
//       [name]: value
//     };
//   });
// };

