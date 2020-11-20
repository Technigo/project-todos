import { createSlice } from '@reduxjs/toolkit';

const todoList = [
  { id: 1, task: 'Eat candy', category: 'Nom' },
  { id: 2, task: 'Dance', category: 'Fun' },
  { id: 3, task: 'Jump', category: 'Fun' },
  { id: 4, task: 'Bake a cake', category: 'Nom' },
];

export const todos = createSlice({
  name: 'todos',
  initialState: todoList,
});
