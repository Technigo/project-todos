import { createSlice } from "@reduxjs/toolkit"

const todos = createSlice({
  name: "todos",
  initialState: {
    tasks: [],
    categories: [
      { value: "to-do", label: "to-do"},
      { value: "shopping", label: "shopping"},
      { value: "work", label: "work"},
      { value: "housework", label: "housework"},
      { value: "social", label: "social"},
    ],
    filterCategories: [
      { value: "all", label: "all"},
      { value: "to-do", label: "to-do"},
      { value: "shopping", label: "shopping"},
      { value: "work", label: "work"},
      { value: "housework", label: "housework"},
      { value: "social", label: "social"},
    ],
  },
  reducers: {
    addTask: (state, action) => {
      const { task, category, dueDate} = action.payload;
      state.tasks.push({ 
        id: Date.now(), 
        task,
        category,
        dueDate,
        isComplete: false,
        icon: (category === "to-do") ? "list-ul"
        : (category === "shopping") ? "shopping-cart"
        : (category === "work") ? "briefcase"
        : (category === "housework") ? "laptop-house"
        : "heart",
      })
    },
    removeTask: (state, action) => {
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