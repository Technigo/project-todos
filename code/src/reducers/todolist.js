import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 0,
      text: 'Continue with code along',
      complete: false,
      category: 'Studies'
    },
    {
      id: 1,
      text: 'Clean the office room',
      complete: false,
      category: 'House Chores'
    },
    {
      id: 2,
      text: 'Buy more bread',
      complete: false,
      category: 'Shopping List'
    },
    {
      id: 3,
      text: '30 minutes cardio!',
      complete: false,
      category: 'Other'
    }
  ]
};

export const todolist = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const newToDo = action.payload;
      state.items.push(newToDo);
    },
    changeComplete: (state, action) => {
      const { itemId, complete } = action.payload;
      const matchingTask = state.items.find((item) => item.id === itemId );

      if(matchingTask) {
        matchingTask.complete = complete;
      }
    },
    removeToDo: (state, action) => {
      const { itemId } = action.payload;
      state.items = state.items.filter(x => x.id !== itemId);
    }
  }
});
