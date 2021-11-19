import { createSlice } from "@reduxjs/toolkit";

const todoData = createSlice({
  name: "todo",
  initialState: [
    { id: 1, title: "Meeting", task: "“It works on my machine.”", completed: false },
    { id: 2, title: "Afterwork", task: "“API by day, IPA by night.”", completed: true },
    { id: 3, title: "Deadline", task: "“When I wrote this code, only God and I understood what I did. Now only God knows.”", completed: false },
    { id: 4, title: "Work", task: "“Debugging.. is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.”", completed: false },
   
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

    toggleAll: (store, action) => {
     const togg = store.findIndex((todo) => todo.completed === false);
     store[togg].completed = action.payload.completed;

    },

    toggleComplete: (state, action) => {
      const index = state.findIndex((todos) => todos === action.payload);
      state[index].completed = action.payload.completed;
    },

    deleteTodo: (state, action) => {
      return state.filter((todos) => todos.id !== action.payload.id);
    }
  }
});

export const { addTodo, toggleComplete, deleteTodo } = todoData.actions;

export default todoData.reducer;
