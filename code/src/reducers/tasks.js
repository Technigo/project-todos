import { createSlice } from "@reduxjs/toolkit";

export const tasks = createSlice({
  name: "tasks",
  initialState: {
    task: [],
  },

  reducers: {
    addTask: (state, action) => {
      state.task.push({ ...action.payload });
      // Sort tasks by complete and date
      const complete = (x, y) => {
        return x > y ? 1 : x < y ? -1 : 0;
      };
      const added = (x, y) => {
        return x < y ? 1 : x > y ? -1 : 0;
      };
      state.task.sort(function (a, b) {
        return complete(a.complete, b.complete) || added(a.added, b.added);
      });
    },

    toggleTask: (state, action) => {
      state.task[action.payload.taskindex].complete =
        !state.task[action.payload.taskindex].complete;
      // Sort tasks by complete and date
      const complete = (x, y) => {
        return x > y ? 1 : x < y ? -1 : 0;
      };
      const added = (x, y) => {
        return x < y ? 1 : x > y ? -1 : 0;
      };
      state.task.sort(function (a, b) {
        return complete(a.complete, b.complete) || added(a.added, b.added);
      });
    },

    deleteTask: (state, action) => {
      state.task.splice(action.payload.taskindex, 1);
    },

    toggleAllTasksComplete: (state, action) => {
      const tasks = state.task.filter(
        (task) => action.payload.projectid === task.projectid
      );
      for (let i = 0; i < tasks.length; i++) {
        tasks[i].complete = true;
      }
    },

    toggleAllTasksIncomplete: (state, action) => {
      const tasks = state.task.filter(
        (task) => action.payload.projectid === task.projectid
      );
      for (let i = 0; i < tasks.length; i++) {
        tasks[i].complete = false;
      }
    },

    deleteProjectTasks: (state, action) => {
      for (let i = 0; i < state.task.length; i++) {
        if (state.task[i].projectid === action.payload.projectid) {
          state.task.splice(i, 1);
          i--;
        }
      }
    },
  },
});
