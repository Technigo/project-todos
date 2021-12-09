import { createSlice } from "@reduxjs/toolkit";

const todoData = createSlice({
  name: "todo",
  initialState: [
    { id: 1, title: "Meeting", task: "“It works on my machine.”", completed: false },
    { id: 2, title: "Afterwork", task: "“API by day, IPA by night.”", completed: true },
    { id: 3, title: "Deadline", task: "“When I wrote this code, only God and I understood what I did. Now only God knows.”", completed: false },
    { id: 4, title: "Work", task: "“Debugging.. is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.”", completed: false },
    { id: 5, title: "Meeting", task: "“It works on my machine.”", completed: false },
    { id: 6, title: "Afterwork", task: "“API by day, IPA by night.”", completed: true },
    { id: 7, title: "Deadline", task: "“When I wrote this code, only God and I understood what I did. Now only God knows.”", completed: false },
    { id: 8, title: "Work", task: "“Debugging.. is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.”", completed: false },
   
  ],

  reducers: {
    addTodo: (store, action) => {

       const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        task: action.payload.task,
        completed: false
      }; 
      const storeNew = [...store, newTodo];

      return storeNew

      
    },
    allComplete:(store,action) =>{ 

       store.map(todos => {
        if (!todos.completed) {
          todos.completed = action.payload.completed
          return{
            completed:true,
...store,

          }
        } else {
          return store;
        }
      });
    },

    deleteComplete: (state, action) => {
      return state.filter((todos) => !todos.completed === !action.payload.completed);
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

export const { addTodo, toggleComplete, deleteTodo, allComplete, deleteComplete } = todoData.actions;

export default todoData.reducer;
