import { createSlice } from "@reduxjs/toolkit";

const data = [
  { id: 1, text: "Weekly meeting", complete: false },
  { id: 2, text: "Apply for frontend roles", complete: true },
  { id: 3, text: "Update LinkedIn profile", complete: false },
  { id: 4, text: "Dentist appointment", complete: false },
];

const tasks = createSlice({
  name: "tasks",
  initialState: {
    lists: data
  },
  reducers: {
    toggleTask: (store, action) => {
      store.lists.forEach((list) => {
        if (list.id === action.payload) {
          list.complete = !list.complete
        }
      })
    }
  }
});

export default tasks;