import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: {
    items: [
      {
        text: '',
        completed: false,
        duedate: '',
        working: '',
      },
    ],
  },
};

export const todos = createSlice({
  name: 'todos',
  initialState: {
    list: {
      items: [
        {
          text: '',
          completed: false,
          duedate: '',
          working: '',
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

    // setDueDate: (state, action) => {
    //   const { dueDate } = action.payload;
    //   state.list.items.push(dueDate);
    // },

    setCompleted: (state, action) => {
      const { itemIndex, completed } = action.payload;
      state.list.items[itemIndex].completed = completed;
    },

    setReset: (state, action) => {
      const { reset } = action.payload;
      return initialState;
    },
  },
});
