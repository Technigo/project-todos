import { createSlice } from "@reduxjs/toolkit";

export const tasks = createSlice({
  name: "tasks",
  initialState: {
    task: [],
  },

  reducers: {
    addTask: (state, action) => {
      console.log(action.payload);
      state.task.push({ ...action.payload });
    },

    toggleTask: (state, action) => {
      console.log(action.payload);
      const task = state.task.find(
        (task) => action.payload.taskid === task.taskid
      );
      console.log(task);
      if (task.complete) {
        task.complete = false;
      } else if (!task.complete) {
        task.complete = true;
      }
      // task.complete = action.payload.complete;
      // const updatedTask = {
      //   ...state.task,
      //   complete: tasks[taskIndex].complete,
      // };
      // return [
      //   ...state.slice(0, taskIndex),
      //   updatedTask,
      //   ...state.slice(taskIndex + 1),
      // ];
    },
  },

  deleteTask: (state, action) => {},
});
