import { createSlice } from "@reduxjs/toolkit";

const todos = [
  {
    id: 1,
    title: "Walk in the park",
    place: "Trädgårdsföreningen, Gothenburg",
    time: "09:00",
    category: "activity",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "Walk in the park",
    place: "Trädgårdsföreningen, Gothenburg",
    time: "09:00",
    category: "activity",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: 3,
    title: "Walk in the park",
    place: "Trädgårdsföreningen, Gothenburg",
    time: "09:00",
    category: "activity",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: 4,
    title: "Walk in the park",
    place: "Trädgårdsföreningen, Gothenburg",
    time: "09:00",
    category: "activity",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: 5,
    title: "Walk in the park",
    place: "Trädgårdsföreningen, Gothenburg",
    time: "09:00",
    category: "activity",
    completed: false,
    createdAt: new Date(),
  },
];

const initialState = {
  todos,
};

export const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    emptyList: (store) => {
      store.todos = [];
    },

    addTodo: (store, action) => {
      const { category, title, place, time } = action.payload;
      const id = store.todos.length + 1;
      store.todos.push({
        id,
        category,
        title,
        place,
        time,
        completed: false,
        createdAt: new Date(),
      });
    },

    setIsCompleted: (store, action) => {
      const { id } = action.payload;
      const index = store.todos.findIndex((todo) => todo.id === id);

      const newTodos = [...store.todos];

      newTodos[index].completed = !newTodos[index].completed;
      store.todos = newTodos;
    },

    setAllIsCompleted: (store) => {
      const newTodos = [...store.todos];

      newTodos.forEach((todo) => {
        todo.completed = true;
      });

      store.todos = newTodos;
    },

    removeTodo: (store, action) => {
      const { id } = action.payload;
      const index = store.todos.findIndex((todo) => todo.id === id);

      const newTodos = [...store.todos];
      newTodos.splice(index, 1);
      store.todos = newTodos;
    },
  },
});
