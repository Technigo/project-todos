import { createSlice } from '@reduxjs/toolkit';

const todoList = [
  { id: 1, task: 'Eat candy', category: 'Nom', prio: true },
  { id: 2, task: 'Dance', category: 'Fun' },
  { id: 3, task: 'Jump', category: 'Fun', prio: true },
  { id: 4, task: 'Bake a cake', category: 'Nom' },
];

const completedTasks = [];

export const todos = createSlice({
  name: 'todos',
  initialState: todoList,
  reducers: {
    addTodo: (state, action) => {
      action.payload.prio
        ? state.splice(0, 0, action.payload)
        : state.push(action.payload);
    },
    checkTodo: (state, action) => {
      completedTasks.push(action.payload);
      state.splice(action.payload, 1);

      console.log(completedTasks);
    },
  },
});

export const completed = createSlice({
  name: 'completed',
  initialState: completedTasks,
});
