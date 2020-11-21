import { createSlice } from '@reduxjs/toolkit';

const todoList = [
  { id: 1, task: 'Eat candy', category: 'Nom', prio: true },
  { id: 2, task: 'Dance', category: 'Fun' },
  { id: 3, task: 'Jump', category: 'Fun', prio: true },
  { id: 4, task: 'Bake a cake', category: 'Nom' },
];

export const todos = createSlice({
  name: 'todos',
  initialState: todoList,
  reducers: {
    addTodo: (state, action) => {
      action.payload.prio
        ? state.splice(0, 0, action.payload)
        : state.push(action.payload);
    },
  },
});
