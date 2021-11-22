import { createSlice } from '@reduxjs/toolkit';

const todos = createSlice({
name: 'todos',
initialState: {
    todoList: [],
},
reducers: {
    saveTodo: (state, action) => {
    const newTodo = {
        id: Date.now(),
        text: action.payload,
        done: false,
    };
    state.todoList = [...state.todoList, newTodo];
    },

    toggleComplete: (state, action) => {
    const toggleCompletedItems = state.todoList.map((item) => {
        if (item.id === action.payload) {
        const updatedTodo = {
            ...item,
            done: !item.done,
        };
        return updatedTodo;
        } else {
        return item;
        }
    });
    state.todoList = toggleCompletedItems;
    },

    deleteTodo: (state, action) => {
    const deleteAnItem = state.todoList.filter((item) => item.id !== action.payload);
    state.todoList = deleteAnItem;
    },
},
});

export default todos;