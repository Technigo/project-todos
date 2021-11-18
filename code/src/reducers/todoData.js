import { createSlice } from "@reduxjs/toolkit";

const todoData = createSlice({
  name: "todo",
  initialState: [
    { id: 1, titel: "Meeting", task: "“It works on my machine.”", completed: false },
    { id: 2, titel: "Afterwork", task: "“API by day, IPA by night.”", completed: true },
    { id: 3, titel: "Deadline", task: "“When I wrote this code, only God and I understood what I did. Now only God knows.”", completed: false },
    { id: 4, titel: "Work", task: "“Debugging.. is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.”", completed: false },
   
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
