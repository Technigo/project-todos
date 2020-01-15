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
      const todo = state.taskData.find(todo => todo.id === action.payload);
      // let completed = state.taskData.map(todo => todo.complete);
      // console.log(todo);
      // console.log(completed);
      // console.log(todo[action.payload.id]);
      // console.log(action.payload.id);
      // console.log(completed[action.payload.id]);
      // console.log(!completed[action.payload.id]);

      if (todo) {
        todo.complete = !todo.complete;
      }

      // if (todo[action.payload] === action.payload) {
      //   state.taskData[action.payload].complete = !state.taskData[
      //     action.payload
      //   ].complete;
      // }
    },
    toggleImportant: (state, action) => {
      const todo = state.taskData.find(todo => todo.id === action.payload);
      console.log(todo);

      if (todo) {
        todo.important = !todo.important;
      }

      // if (todo[action.payload] === action.payload) {
      //   state.taskData[action.payload].important = !state.taskData[
      //     action.payload
      //   ].important;
      // }
    },
    deleteAll: state => {
      for (let i in state.taskData) delete state.taskData[i];

      state.total = 0;
    },
    deleteOne: (state, action) => {
      // const todo = state.taskData.map(todo => todo.id);
      // if (todo[action.payload] === action.payload) {
      //   delete state.taskData[action.payload];
      // }
      state.taskData = state.taskData.filter(
        item => item.id !== action.payload
      );
      state.total -= 1;
    },
    showAll: (state, action) => {
      state.taskData = state.taskData.map(todo => todo);
      state.total = state.taskData.length;
    },
    showCompleted: (state, action) => {
      console.log(state.taskData);
      state.taskData = state.taskData.filter(todo => todo.complete);
      console.log(state.taskData);
      // console.log(todo);
      // if (todo) {
      //   console.log(state.taskData);
      // }
      state.total = state.taskData.length;
    },
    showNotCompleted: (state, action) => {
      state.taskData = state.taskData.filter(todo => !todo.complete);
      state.total = state.taskData.length;
    }
  }
});
