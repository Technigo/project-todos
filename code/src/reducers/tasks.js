import { createSlice } from "@reduxjs/toolkit";

const taskList = {
  todos: [
    { id: 1, task: "Fix some styling issues", due: "Today", done: false },
    { id: 2, task: "Watch videos for next week", due: "Today", done: false },
    { id: 3, task: "Do pull request", due: "Today", done: false },
    { id: 4, task: "Have fun", due: "Tomorrow", done: false },
    { id: 5, task: "Have even more fun", due: "Tomorrow", done: false },
    { id: 6, task: "Survive Monday", due: "Monday", done: false },
  ],
};

export const tasks = createSlice({
  name: "tasks",
  initialState: taskList,
  reducers: {
    addTask: (state, action) => {
      //use this to make sure new is + 1 from the largest current element in the array
      const newId = Math.max(...state.todos.map((todo) => todo.id)) + 1;
      //I use push since redux toolkit is taking care of immutability
      state.todos.push({
        id: newId,
        task: action.payload.description,
        due: action.payload.date,
        done: false,
      });
    },
    markDone: (state, action) => {
      state.todos[action.payload].done = !state.todos[action.payload].done;
    },
    markAll: (state) => {
      state.todos.map((todo) => (todo.done = true));
    },
    removeTask: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
    removeAll: (state) => {
      state.todos.splice(0, state.todos.length);
    },
  },
});
