import { createSlice } from "@reduxjs/toolkit";

// const taskData = [
//   { id: 1, text: "Watch video on actions & reducers", complete: true },
//   { id: 2, text: "Follow redux codealong", complete: true },
//   { id: 3, text: "Fork weekly assignment", complete: true },
//   { id: 4, text: "Create a todo app", complete: false }
// ];

const initialState = {
  taskData: [],
  total: 0
};

export const tasks = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      let { text, id } = action.payload;

      state.taskData.push({
        id,
        text,
        complete: false,
        important: false
      });

      state.total += 1;
    },
    toggle: (state, action) => {
      const todo = state.taskData.map(todo => todo.id);
      let completed = state.taskData.map(todo => todo.complete);
      console.log(todo);
      console.log(completed);
      console.log(todo[action.payload.id]);
      console.log(action.payload.id);
      console.log(completed[action.payload.id]);
      console.log(!completed[action.payload.id]);

      if (todo[action.payload.id] === action.payload.id) {
        state.taskData[action.payload.id].complete = !state.taskData[
          action.payload.id
        ].complete;
      }
    },
    toggleImportant: (state, action) => {
      const todo = state.taskData.map(todo => todo.id);

      if (todo[action.payload.id] === action.payload.id) {
        state.taskData[action.payload.id].important = !state.taskData[
          action.payload.id
        ].important;
      }
    },
    deleteAll: state => {
      for (let i in state.taskData) delete state.taskData[i];

      state.total = 0;
    },
    deleteOne: (state, action) => {
      const todo = state.taskData.map(todo => todo.id);
      if (todo[action.payload.id] === action.payload.id) {
        delete state.taskData[action.payload.id];
      }
      state.total -= 1;
    }
  }
});

export const { addTask, toggle } = tasks.actions;
export default tasks.reducer;
