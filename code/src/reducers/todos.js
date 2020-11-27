import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const initialState = {
  tasks: [],
};

export const todos = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodosList = [...state.tasks, action.payload];
      state.tasks = newTodosList;
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
    removeAllCompletedTodos: (state, action) => {
      const noCompletedTodos = state.tasks.filter((task) => !task.isCompleted);
      state.tasks = noCompletedTodos;
    },
  },
});
