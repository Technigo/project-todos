import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: {
    name: "To Do List",
    items: [
      {
        id: 1,
        text: 'Continue with code along',
        complete: false,
        category: 'Studies'
      },
      {
        id: 2,
        text: 'Clean the office room',
        complete: false,
        category: 'House Chores'
      },
      {
        id: 3,
        text: 'Buy more bread',
        complete: false,
        category: 'Shopping List'
      },
      {
        id: 4,
        text: '30 minutes cardio!',
        complete: false,
        category: 'Other'
      }
    ]
  }
};

export const todolist = createSlice({
  name: "todolist",
  initialState: initialState,
  reducers: {
    addToDo: (state, action) => {
      const newToDo = action.payload;
      state.list.items.push(newToDo);
    }
  }
});
