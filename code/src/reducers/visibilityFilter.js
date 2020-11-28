import { createSlice } from '@reduxjs/toolkit';

//export const visibilityFilter = {};

const initialState = {
  list: {
    name: 'visibilityFilter',
    options: [
      { value: 'show all', label: 'SHOW_ALL' },
      { value: 'show complete', label: 'SHOW_COMPLETE' },
      { value: 'show active', label: 'SHOW_ACTIVE' },
    ],
  },
};

// export const todos = createSlice({
//   name: 'todos',
//   initialState: initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       const { todoItemInfo } = action.payload;
//       state.list.items.push(todoItemInfo);
//     },

// const initialState = VisibilityFilter.ShowAll;

export const visibilityFilter = createSlice({
  name: 'visibilityFilter',
  initialState,
  reducers: {
    setVisibilityFilter: (state, action) => {
      state.list.selectedStatusFilter = action.payload;
    },
  },
});
