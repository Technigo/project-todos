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
      const projectIndex = state.project.findIndex(
        (project) => action.payload.projectid === project.projectid
      );
      state.project.splice(projectIndex, 1);
    },
  },
});
