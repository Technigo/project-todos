import { createSlice } from "@reduxjs/toolkit";

const iconArray = [
  [0, "chat"],
  [1, "clipboard"],
  [2, "game"],
  [3, "gift"],
  [4, "outdoors"],
  [5, "pin"],
  [6, "shopping"],
  [7, "time"],
  [8, "travel"],
  [9, "tv"],
  [10, "view"],
  [11, "weather"],
];

export const icons = createSlice({
  name: "icons",
  initialState: {
    icons: iconArray,
  },
});
