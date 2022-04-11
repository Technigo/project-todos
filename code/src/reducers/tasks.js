import { createSlice } from "@reduxjs/toolkit";

export const tasks = createSlice({
  name: "tasks",
  initialState: {
    task: [],
  },

  reducers: {
    addTask: (state, action) => {
      state.task.push({ ...action.payload });
      // Sort tasks by complete
      state.task.sort((task) => {
        return task.complete ? 1 : -1;
      });
    },

    toggleTask: (state, action) => {
      const task = state.task.find(
        (task) => action.payload.taskid === task.taskid
      );
      task.complete = !task.complete;
      // Sort tasks by complete
      state.task.sort((task) => {
        return task.complete ? 1 : -1;
      });
    },

    deleteTask: (state, action) => {
      const taskIndex = state.task.findIndex(
        (task) => action.payload.taskid === task.taskid
      );
      state.task.splice(taskIndex, 1);
    },

    toggleAllTasks: (state, action) => {
      console.log(action.payload);
      const tasks = state.task.filter(
        (task) => action.payload.projectid === task.projectid
      );
      for (let i = 0; i < tasks.length; i++) {
        tasks[i].complete = true;
      }
    },

    // BUGGY - doesn't delete all tasks that belong to a project
    deleteProjectTasks: (state, action) => {
      console.log(action.payload);
      for (let i = 0; i < state.task.length; i++) {
        if (state.task[i].projectid === action.payload.projectid) {
          state.task.splice(i, 1);
          i--;
        }
      }
    },
  },
});
