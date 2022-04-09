import { createSlice } from "@reduxjs/toolkit";

const colorArrayObj = [
  { id: 0, hex: "#E52E4E", rgba: "229, 46, 78", name: "red" },
  { id: 1, hex: "#F7643B", rgba: "247, 100, 59", name: "orange" },
  { id: 2, hex: "#DF8D00", rgba: "223, 141, 0", name: "yellow" },
  { id: 3, hex: "#10AE21", rgba: "16, 174, 32", name: "green" },
  { id: 4, hex: "#04A9A4", rgba: "4, 169, 164", name: "teal" },
  { id: 5, hex: "#00A8DB", rgba: "0, 168, 219", name: "light blue" },
  { id: 6, hex: "#1183DA", rgba: "17, 131, 218", name: "dark blue" },
  { id: 7, hex: "#E929BA", rgba: "233, 41, 186", name: "pink" },
  { id: 8, hex: "#7B39ED", rgba: "123, 57, 237", name: "purple" },
  { id: 9, hex: "#666666", rgba: "102, 102, 102", name: "gray" },
];

export const colors = createSlice({
  name: "colors",
  initialState: {
    colors: colorArrayObj,
  },
});
