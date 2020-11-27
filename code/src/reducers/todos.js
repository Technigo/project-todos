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

      // Set timestamp for when task is completed
      const checkedAt = moment(new Date());

      selectedTask.isCompleted = !selectedTask.isCompleted;
      selectedTask.completedAt = checkedAt;
    },
    removeTodo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    completeAllTodos: (state, action) => {
      state.tasks.map((task) => (task.isCompleted = true));
    },
    removeAllTodos: (state, action) => {
      const removedAllTodos = [];
      state.tasks = removedAllTodos;
    },
    removeAllCompletedTodos: (state, action) => {
      const removedCompletedTodos = state.tasks.filter(
        (task) => !task.isCompleted
      );
      state.tasks = removedCompletedTodos;
    },
  },
});
