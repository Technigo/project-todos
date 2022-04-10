import { createSlice } from "@reduxjs/toolkit";

export const projects = createSlice({
  name: "projects",
  initialState: {
    project: [],
  },

  reducers: {
    addProject: (state, action) => {
      console.log(action.payload);
      state.project.push({ ...action.payload });
    },

    deleteProject: (state, action) => {
      console.log(action.payload);
      const projectIndex = state.project.findIndex(
        (project) => action.payload.projectid === project.projectid
      );
      state.project.splice(projectIndex, 1);
    },
  },
});
