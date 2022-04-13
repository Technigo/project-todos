import { createSlice } from "@reduxjs/toolkit";

const data = [
  { id: 1, text: "Watch video on actions & reducers", isComplete: false },
  { id: 2, text: "Follow redux codealong", isComplete: false },
  { id: 3, text: "Fork weekly assignment", isComplete: false },
  { id: 4, text: "Create a todo app", isComplete: false },
];

const tasks = createSlice({
  name: "tasks",
  initialState: {
    items: data,
  },
  reducers: {
    toggleTask: (store, action) => {
      console.log("store:", store);
      console.log("Action:", action);

      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isComplete = !item.isComplete;
        }
      });
    },
    deleteTask: (store, action) =>{
      store.items.splice(action.payload, 1);
    }
  },
});

export default tasks;
