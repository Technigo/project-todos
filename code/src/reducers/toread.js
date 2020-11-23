import { createSlice } from "@reduxjs/toolkit"

export const toread = createSlice({
  name: "toread",
  initialState: {
    username: "Caroline",
    books: ["hello", "hello", "hello"],
  },
});