import { createSlice } from "@reduxjs/toolkit"

export const toread = createSlice({
  name: "toread",
  initialState: {
    username: "Caroline",
    items: ["hello", "hello", "hello"],
  },
});