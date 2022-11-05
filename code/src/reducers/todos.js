import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const initialState = {
  tasks: []
};

export const todos = createSlice({
  name: 'todos',
  initialState,

  reducers: {
    // adding new item to the todo
    addTodo: (state, action) => {
      const newTodosList = [...state.tasks, action.payload];
      state.tasks = newTodosList;
    },
    checkTodo: (state, action) => {
      const selectedTask = state.tasks.find(
        (task) => task.id === action.payload.id
      );

      /* timestamp for when the task is done */
      const checkedAt = moment(new Date());
      selectedTask.isCompleted = !selectedTask.isCompleted;
      selectedTask.completedAt = checkedAt;
    },

    removeToDo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    completeAllTodos: (state) => {
      state.tasks.forEach((task) => { task.isCompleted = true });
    },

    removeAllTodos: (state) => {
      const removedAllTodos = [];
      state.tasks = removedAllTodos;
    },

    removeAllCompletedTodos: (state) => {
      const removedCompletedTodos = state.tasks.filter(
        (task) => !task.isCompleted
      );
      state.tasks = removedCompletedTodos;
    }
  }
})