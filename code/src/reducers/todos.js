import { createSlice } from "@reduxjs/toolkit"

const todos = createSlice({
  name: "todos",
  initialState: {
    tasks: [
      { id: 1, task: "First task", isComplete: false },
      { id: 2, task: "Second task", isComplete: true },
      { id: 3, task: "Third task", isComplete: false },
    ],
  },
  reducers: {
    addTask: (state, action) => {
        const newId = Math.max(...state.tasks.map((todo) => todo.id)) + 1;
        state.tasks.push({ id: newId, task: action.payload, isComplete: false })

    },
    toggleComplete: (store, action) => {
      const updatedTasks = store.tasks.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        } else {
            return todo;
          }
      });
        
      store.tasks = updatedTasks;

      }
  },
});

export default todos;