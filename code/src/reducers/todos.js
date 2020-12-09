import { createSlice } from '@reduxjs/toolkit';

    const initialState = {
        list: {
            items: [
             ]    
        }
    };

    export const todos = createSlice({
    name: "todos",
    initialState: initialState, //kan ta bort initialstate till initialstate, 
    
    reducers: {
        addTodo: (state, action) => {
            state.list.items.push(action.payload);
        },
        markCompleted: (state, action) => {
            const completedTask = state.list.items.find(item => item.id === action.payload);
            if (completedTask) {
                completedTask.complete = !completedTask.complete;
            }
        },
        removeTodo: (state, action) => {
            state.list.items = state.list.items.filter(item => item.id !== action.payload)
        },
        removeAllCompleted: (state, action) => {
            const filteredList = state.list.items.filter(
                (item) => !item.complete);
                state.list.items = filteredList;
        },
        removeAll: (state) => {
            state.list.items = []
          },
    }
});

export default todos;