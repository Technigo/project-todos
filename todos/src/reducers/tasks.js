import { createSlice } from "@reduxjs/toolkit";

const tasks = createSlice({
  name: "tasks",
  initialState: [
    { id: 1, text: "Weekly meeting", complete: false },
    { id: 2, text: "Apply for frontend roles", complete: true },
    { id: 3, text: "Update LinkedIn profile", complete: false },
    { id: 4, text: "Dentist appointment", complete: false },
  ]
});

export default tasks;