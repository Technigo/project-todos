import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: {
    items: [
      {
        text: '',
        completed: false,
        duedate: '',
        working: '',
        shopping: true,
        shopped: false,
      },
    ],
  },
};

export const todos = createSlice({
  name: 'todos',
  initialState: initialState,

  reducers: {
    // adding a task to the list
    addTodo: (state, action) => {
      const { todoInfo } = action.payload;
      state.list.items.push(todoInfo);
    },

    // changing task to completed/uncompleted
    setCompleted: (state, action) => {
      const { itemIndex, completed } = action.payload;
      state.list.items[itemIndex].completed = completed;
    },

    setShopped: (state, action) => {
      const { itemIndex, shopped } = action.payload;
      state.list.items[itemIndex].shopped = shopped;
    },

    // removing all items
    setReset: (state, action) => {
      const { reset } = action.payload;
      return initialState;
    },
  },
});
