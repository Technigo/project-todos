import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: {
        name: 'Todo List',
        items: [
            { id: 1, text: 'Watch video on actions & reducers', isComplete: true },
            { id: 2, text: 'Follow redux codealong', isComplete: true },
            { id: 3, text: 'Fork weekly assignment', isComplete: true },
            { id: 4, text: 'Create a todo app', isComplete: true },
            { id: 5, text: 'Celebrate with chocolate 🍫', isComplete: false },

        ]
    }
};
 
export const todos = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const itemInfo = action.payload;
            state.list.items.push(itemInfo);
        },
        toggleComplete:  (state, action) => {
            const { itemIndex, isComplete } = action.payload;
            state.list.items[itemIndex].isComplete = isComplete;
        },
        removeTodo: (state, action) => {
            const { itemIndex } = action.payload;
            state.list.items = state.list.items.filter(
                (item, index) => index !== itemIndex)
        },
        removeAll: (state) => {
            state.list.items = []
        }
    }
});

