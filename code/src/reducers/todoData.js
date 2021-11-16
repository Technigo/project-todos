import { createSlice } from "@reduxjs/toolkit";

const todoData = createSlice({
  name: "todo",
  initialState: [
    { id: 1, titel: "todo1", task: "task1", completed: false },
    { id: 2, titel: "todo2", task: "task2", completed: true },
    { id: 3, titel: "todo3", task: "task3", completed: false },
   
  ],

  reducers: {
    addTodo: (store, action) => {

       const newTodo = {
        id: Date.now(),
        titel: action.payload.titel,
        task: action.payload.task,
        completed: false
      }; 
      const storeNew = [...store, newTodo];

      return storeNew

      
    },

    toggleComplete: (state, action) => {
      const index = state.findIndex((todos) => todos.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },

    deleteTodo: (state, action) => {
      return state.filter((todos) => todos.id !== action.payload.id);
    }
  }
});

export const { addTodo, toggleComplete, deleteTodo } = todoData.actions;

export default todoData.reducer;
