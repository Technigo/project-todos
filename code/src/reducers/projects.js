import { createSlice } from "@reduxjs/toolkit";

export const projects = createSlice({
  name: "projects",
  initialState: {
    project: [],
  },

  reducers: {
    addProject: (state, action) => {
      state.project.push({ ...action.payload });
    },

    deleteProject: (state, action) => {
      state.project.splice(action.payload.projectindex, 1);
    },

    addTask: (state, action) => {
      state.project[action.payload.projectindex].tasks.push({
        ...action.payload,
      });

      // Sort tasks by complete and date
      // const complete = (x, y) => {
      //   return x > y ? 1 : x < y ? -1 : 0;
      // };
      // const added = (x, y) => {
      //   return x < y ? 1 : x > y ? -1 : 0;
      // };
      // state.project[action.payload.projectindex].tasks.sort(function (a, b) {
      //   return complete(a.complete, b.complete) || added(a.added, b.added);
      // });
    },

    toggleTask: (state, action) => {
      state.project[action.payload.projectindex].tasks[
        action.payload.taskindex
      ].complete =
        !state.project[action.payload.projectindex].tasks[
          action.payload.taskindex
        ].complete;

      // Sort tasks by complete and date
      // const complete = (x, y) => {
      //   return x > y ? 1 : x < y ? -1 : 0;
      // };
      // const added = (x, y) => {
      //   return x < y ? 1 : x > y ? -1 : 0;
      // };
      // state.project[action.payload.projectindex].tasks.sort(function (a, b) {
      //   return complete(a.complete, b.complete) || added(a.added, b.added);
      // });
    },

    deleteTask: (state, action) => {
      state.project[action.payload.projectindex].tasks.splice(
        action.payload.taskindex,
        1
      );
    },

    toggleAllTasksComplete: (state, action) => {
      const tasks = state.project[action.payload.projectindex].tasks;
      for (let i = 0; i < tasks.length; i++) {
        tasks[i].complete = true;
      }
    },
  },
});
