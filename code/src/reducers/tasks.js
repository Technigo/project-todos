import {createSlice} from '@reduxjs/toolkit'


const initialTasks = [
    { id: 1, text: 'Watch video on actions & reducers', complete: true },
    { id: 2, text: 'Follow redux codealong', complete: true },
    { id: 3, text: 'Fork weekly assignment', complete: true },
    { id: 4, text: 'Create a todo app', complete: false },
  ]
 
export const tasks = createSlice({
    name: 'tasks',
    initialState: {
        items: initialTasks
    },
    reducers: {
        addItem: (state, action) =>{
            console.log(action)
            console.log(state)
            //state.items.push({...action.payload})
            //const myTask = <Task />
            //state.items.push({...{ id: 5, text: action.payload, complete: false }})
            state.items.push({ id: Date.now(), text: action.payload})
        },

        removeItem: (state, action) =>{
            const existingTask = state.items.find((item) => item.id === action.payload.id)
            if (existingTask) {
                /*return new array with the items in the array exept the item that was removed*/
                state.items.filter((item) => item.id !== action.payload.id)
            } 
        }
    }
  }) 