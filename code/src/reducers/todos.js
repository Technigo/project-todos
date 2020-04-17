import { createSlice } from '@reduxjs/toolkit';

export const todos = createSlice({
  name: 'todos',
  initialState: {
    list: {
      items: [
        {
          text: '',
          completed: false,
        },
      ],
    },
  },
  reducers: {
    // adding a task to the list
    addTodo: (state, action) => {
      const { todoInfo } = action.payload;
      state.list.items.push(todoInfo);
    },
    setCompleted: (state, action) => {
      const { itemIndex, completed } = action.payload;
      state.list.items[itemIndex].completed = completed;
    },
  },
});
