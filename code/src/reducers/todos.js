import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

export const todos = createSlice({
  name: 'todos',
  initialState: {
    tasks: [
      {
        id: 1,
        task: 'Eat candy',
        category: 'Nom',
        prio: true,
        isCompleted: false,
      },
      {
        id: 2,
        task: 'Dance',
        category: 'Fun',
        isCompleted: false,
      },
      { id: 3, task: 'Jump', category: 'Fun', prio: true, isCompleted: false },
      { id: 4, task: 'Bake a cake', category: 'Nom', isCompleted: false },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push(action.payload);
    },
    checkTodo: (state, action) => {
      const selectedTask = state.tasks.find(
        (task) => task.id === action.payload.id
      );
      selectedTask.isCompleted = !selectedTask.isCompleted;

      // Set timestamp for when task is completed
      const checkedAt = moment(new Date());
      selectedTask.completedAt = checkedAt;
    },
    removeTodo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    completeAllTodos: (state, action) => {
      state.tasks.map((task) => (task.isCompleted = true));
    },
    removeAllTodos: (state, action) => {
      state.tasks = [];
    },
  },
});
