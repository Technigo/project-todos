import { createSlice } from  '@reduxjs/toolkit';

const initialState = {};

export const todos = createSlice({
  name: 'todos',
  initialState: initialState, 
  reducers: {
    addProject: (state, action) => {
      const {inputValue} = action.payload;
      state[inputValue] = [];
    },
    addTodo: (state, action) => {
      const { projectName, itemInfo } = action.payload;
      state[projectName].push(itemInfo);
    },
    setDone: (state, action) => {
      const { projectName, itemIndex, done } = action.payload;
      state[projectName][itemIndex].done = done;
    },
    removeTodo: (state, action) => {
      const { projectName, itemIndex } = action.payload;
      state[projectName] = state[projectName].filter((item, index) => index !== itemIndex);
    }, 
    removeAllTodos: (state, action) => {
      const { projectName } = action.payload;
      delete state[projectName];
    }
  }
});