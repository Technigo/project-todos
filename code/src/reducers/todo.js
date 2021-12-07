import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const currentDate = new Date();
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

const todos = [
  {
    id: uniqid(),
    title: "Walk in the park",
    place: "Trädgårdsföreningen, Gothenburg",
    dueDate: currentDate.getTime(),
    category: "activity",
    completed: false,
    createdAt: new Date().getTime(),
  },
  {
    id: uniqid(),
    title: "Morning Jog",
    place: "Outside",
    dueDate: tomorrow.getTime(),
    category: "activity",
    completed: false,
    createdAt: new Date().getTime(),
  },
  {
    id: uniqid(),
    title: "Walk the dog",
    place: "Outside",
    dueDate: currentDate.getTime(),
    category: "activity",
    completed: false,
    createdAt: new Date().getTime(),
  },
  {
    id: uniqid(),
    title: "Cinema",
    place: "Biopalatset, Gothenburg",
    dueDate: tomorrow.getTime(),
    category: "family",
    completed: false,
    createdAt: new Date().getTime(),
  },
  {
    id: uniqid(),
    title: "Cook family dinner",
    place: "At home",
    dueDate: yesterday.getTime(),
    category: "family",
    completed: false,
    createdAt: new Date().getTime(),
  },
  {
    id: uniqid(),
    title: "Important meeting",
    place: "The Office",
    dueDate: tomorrow.getTime(),
    category: "business",
    completed: false,
    createdAt: new Date().getTime(),
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
      const { category, title, place, dueDate } = action.payload;
      const id = uniqid();

      const newTodo = {
        id,
        category,
        title,
        place,
        dueDate,
        completed: false,
        createdAt: new Date().getTime(),
      };

      store.todos = [...store.todos, newTodo];
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
      const decreasedItem = store.todos.filter((item) => item.id !== id);
      store.todos = decreasedItem;
    },
  },
});
