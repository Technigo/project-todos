import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const taskData = [
  { id: 1, text: 'Book hotel in Ubud', complete: false },
  { id: 2, text: 'Add projects in my portfolio', complete: false },
  { id: 3, text: 'Make a pitch about myself', complete: false }
];

const initialState = {
  taskData,
  currentTaskIndex: 0
};

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      state.taskData.push({ id: Date.now(), text: action.payload });
    },
    toggleCompleteTask: (state, action) => {
      const chooseTask = state.taskData.find(txt => txt.id === action.payload);

      if (chooseTask) {
        chooseTask.complete = !chooseTask.complete;
      }
      if (chooseTask) {
        chooseTask.currentTaskIndex += 1;
      }
    },
    addToCounter: (state, action) => {
      const existingTasks = state.taskData.find(
        task => task.id === action.payload
      );

      if (existingTasks) {
        existingTasks.currentTaskIndex += 1;
      }
    },
    removeTask: (state, action) => {
      state.taskData = state.taskData.filter(
        task => task.id !== action.payload
      );
    },
    removeAllTasks: (state, action) => {
      state.taskData = state.taskData.filter(task => task !== action.payload);
    }
  }
});

/*

import { createSlice } from '@reduxjs/toolkit';
import { tasks } from 'reducers/tasks';

export const addTask = createSlice({
  name: 'addTask',
  initialState: [],

  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      const { text, textId } = action.payload;
      const id = state.find(t => t.id === textId);
      state.push({ id, text, complete: false });
    }
  }
});
*/
