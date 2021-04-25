import { createSlice } from '@reduxjs/toolkit';

const todos = createSlice({
    name: 'todos', //good to name same as variable
    initialState: {
        tasks: [
            { id: 1, description: 'Test 1', isComplete: false },
            { id: 2, description: 'Test 2', isComplete: true },
            { id: 3, description: 'Test 3', isComplete: false }
        ],
    },
    reducers: {
        toggleComplete: (store, action) => {
            const updatedTasks = store.tasks.map(task => {
                if (task.id === action.payload) {
                     //update isComplete property
                     return {
                        ...task,
                        isComplete: !task.isComplete
                     }
                } else {
                    return task;
                }
            })
            
            store.tasks = updatedTasks;
        },
        removeTodo: (store, action) => {
            const decreasedTasks = store.tasks.filter(task => task.id !== action.payload);

            store.tasks = decreasedTasks;
        }
    }
});



export default todos;