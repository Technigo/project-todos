import { createSlice } from "@reduxjs/toolkit";

const colorArrayObj = [
  { id: 0, hex: "#E52E4E", name: "red" },
  { id: 1, hex: "#F7643B", name: "orange" },
  { id: 2, hex: "#DF8D00", name: "yellow" },
  { id: 3, hex: "#10AE21", name: "green" },
  { id: 4, hex: "#04A9A4", name: "teal" },
  { id: 5, hex: "#00A8DB", name: "light blue" },
  { id: 6, hex: "#1183DA", name: "dark blue" },
  { id: 7, hex: "#E929BA", name: "pink" },
  { id: 8, hex: "#7B39ED", name: "purple" },
  { id: 9, hex: "#666666", name: "gray" },
];

export const projects = createSlice({
  name: "projects",
  initialState: {
    project: [],
  },

  reducers: {
    addProject: (state, action) => {
      state.project.push(action.payload);
    },

    deleteProject: (state, action) => {},
  },
});
