import { createSlice } from "@reduxjs/toolkit";

const todoData = createSlice({
  name: "todo",
  initialState: [
    { id: 1, titel: "Food", task: "Go buy milk", completed: false },
    { id: 2, titel: "Home", task: "Clean", completed: true },
    { id: 3, titel: "Work", task: "Get the font and color right", completed: false },
    { id: 4, titel: "Meet Carro", task: "Have ha coffe on Friday, yay", completed: false },
   
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
