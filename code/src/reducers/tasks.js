import { createSlice } from "@reduxjs/toolkit";

// const taskData = [
//   { id: 1, text: "Watch video on actions & reducers", complete: true },
//   { id: 2, text: "Follow redux codealong", complete: true },
//   { id: 3, text: "Fork weekly assignment", complete: true },
//   { id: 4, text: "Create a todo app", complete: false }
// ];

const initialState = {
  taskData: [],
  value: ""
};

export const tasks = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      let { taskText } = action.payload;
      const taskId = state.taskData.length + 1;

      state.taskData.push({ id: taskId, text: taskText, complete: false });

      // return [
      //   ...state,
      //   {
      //     id: taskId,
      //     text: taskText,
      //     completed: false
      //   }
      // ];
    }
  }
});
