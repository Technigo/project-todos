import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: {
    name: 'To Do',
    items: [
      {
        description: 'Watch video on actions & reducers',
        complete: true,
        category: 'Home',
        dueDate: '',
      },
      {
        description: 'Follow redux codealong',
        complete: true,
        category: 'Home',
        dueDate: '',
      },
      {
        description: 'Fork weekly assignment',
        complete: true,
        category: 'Home',
        dueDate: '',
      },
      {
        description: 'Create a todo app',
        complete: false,
        category: 'Home',
        dueDate: '',
      },
    ],
    categories: ['Home', 'School', 'Work', 'Personal', 'All'],
    startPage: false,
  },
};

export const todos = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const itemInfo = action.payload;
      state.list.items.push(itemInfo);
    },
    setComplete: (state, action) => {
      const { itemIndex, complete } = action.payload;
      state.list.items[itemIndex].complete = complete;
    },
    removeTodo: (state, action) => {
      const { itemIndex } = action.payload;
      state.list.items = state.list.items.filter(
        (item, index) => index !== itemIndex
      );
    },
    removeAllTodos: state => {
      state.list.items = [];
    },
    goToAddTodo: state => {
      state.startPage = true;
    },
    goToStartPage: state => {
      state.startPage = false;
    },
  },
});
