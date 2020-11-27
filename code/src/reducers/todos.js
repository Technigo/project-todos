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
    categories: ['School', 'Work', 'Personal', 'Home', 'Other'],
    selectedStatusFilter: '',
    selectedCategoryFilter: '',
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

    setComplete: (state, action) => {
      const foundItem = state.list.items.find(
        item => item.id === action.payload
      );
      if (foundItem) {
        foundItem.isComplete = !foundItem.isComplete;
      }
    },

    setAllComplete: state => {
      state.list.items.map(item => (item.isComplete = true));
    },

    setAllNotComplete: state => {
      state.list.items.map(item => (item.isComplete = false));
    },

    removeTodo: (state, action) => {
      const { id } = action.payload;
      state.list.items = state.list.items.filter(item => item.id !== id);
    },

    removeAllTodos: state => {
      state.list.items = [];
    },

    filterByStatus: (state, action) => {
      state.list.selectedStatusFilter = action.payload;
    },

    filterByCategory: (state, action) => {
      state.list.selectedCategoryFilter = action.payload;
    },
  },
});
