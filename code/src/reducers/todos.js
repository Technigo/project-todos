import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: {
    name: 'To Do',
    items: [
      // {
      //   description: 'Watch video on actions & reducers',
      //   complete: true,
      //   category: 'Home',
      //   dueDate: '',
      // },
      // {
      //   description: 'Follow redux codealong',
      //   complete: true,
      //   category: 'Personal',
      //   dueDate: '',
      // },
      // {
      //   description: 'Fork weekly assignment',
      //   complete: true,
      //   category: 'School',
      //   dueDate: '',
      // },
      // {
      //   description: 'Create a todo app',
      //   complete: false,
      //   category: 'Home',
      //   dueDate: '',
      // },
    ],
    categories: ['School', 'Work', 'Personal', 'Home'],
    startPage: false,
  },
};

export const todos = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const { todoItemInfo } = action.payload;
      state.list.items.push(todoItemInfo);
    },
    // setComplete: (state, action) => {
    //   const { itemIndex, complete } = action.payload;
    //   state.list.items[itemIndex].complete = complete;
    // },
    setComplete: (state, action) => {
      const foundItem = state.list.items.find(
        item => item.id === action.payload
      );
      if (foundItem) {
        foundItem.complete = !foundItem.complete;
      }
    },
    setAllComplete: state => {
      state.list.items.map(item => (item.complete = true));
    },
    setAllNotComplete: state => {
      state.list.items.map(item => (item.complete = false));
    },
    removeTodo: (state, action) => {
      const { id } = action.payload;
      state.list.items = state.list.items.filter(item => item.id !== id);
    },
    removeAllTodos: state => {
      state.list.items = [];
    },
    // goToAddTodo: state => {
    //   state.startPage = true;
    // },
    // goToStartPage: state => {
    //   state.startPage = false;
    // },
  },
});
