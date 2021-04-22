import { createSlice } from "@reduxjs/toolkit"

const todos = createSlice({
  name: "todos",
  initialState: {
    tasks: [],
    categories: [
        { value: "to-do", label: "to-do", icon: "list-ul" },
        { value: "shopping", label: "shopping", icon: "shopping-cart" },
        { value: "work", label: "work", icon: "briefcase" },
        { value: "housework", label: "housework", icon: "laptop-house" },
        { value: "family", label: "family", icon: "heart" },
    ],
    filterCategories: [
        { value: "all", label: "all", icon: "calendar-check" },
        { value: "to-do", label: "to-do", icon: "calendar-check" },
        { value: "shopping", label: "shopping", icon: "shopping-cart" },
        { value: "work", label: "work", icon: "briefcase" },
        { value: "housework", label: "housework", icon: "laptop-house" },
        { value: "family", label: "family", icon: "heart" },
    ],
    progress: 0,
  },
  reducers: {
    addTask: (state, action) => {
        const { task, category, dueDate } = action.payload;
        state.tasks.push({ 
            id: Date.now(), 
            task,
            category,
            dueDate,
            isComplete: false })
    },
    removeTask: (state, action) => {
        // const decreasedTasks = store.tasks.filter(todo => { todo.id !== action.payload} state.tasks = decreasedTasks)
        const removedTasks = action.payload;
        state.tasks = state.tasks.filter((task) => task.id !== removedTasks)
    },
    removeAllTasks: (state) => {
        state.tasks = [];
    },
    removeCompletedTasks: (state) => {
        state.tasks = state.tasks.filter((task) => task.isComplete !== true)
    },
    toggleComplete: (state, action) => {
      const updatedTasks = state.tasks.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isComplete: !todo.isComplete,
          }
        } else {
            return todo;
          }
      });
      state.tasks = updatedTasks;
    },
}});

export default todos;