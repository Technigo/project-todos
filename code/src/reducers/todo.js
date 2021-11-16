import { createSlice } from "@reduxjs/toolkit";

const todos = [
  {
    id: 1,
    title: "Walk in the park",
    adress: "Trädgårdsföreningen, Gothenburg",
    time: "09:00",
    category: "activity",
  },
  {
    id: 2,
    title: "Walk in the park",
    adress: "Trädgårdsföreningen, Gothenburg",
    time: "09:00",
    category: "activity",
  },
  {
    id: 3,
    title: "Walk in the park",
    adress: "Trädgårdsföreningen, Gothenburg",
    time: "09:00",
    category: "activity",
  },
  {
    id: 4,
    title: "Walk in the park",
    adress: "Trädgårdsföreningen, Gothenburg",
    time: "09:00",
    category: "activity",
  },
  {
    id: 5,
    title: "Walk in the park",
    adress: "Trädgårdsföreningen, Gothenburg",
    time: "09:00",
    category: "activity",
  },
  {
    id: 6,
    title: "Walk in the park",
    adress: "Trädgårdsföreningen, Gothenburg",
    time: "09:00",
    category: "activity",
  },
  {
    id: 7,
    title: "Walk in the park",
    adress: "Trädgårdsföreningen, Gothenburg",
    time: "09:00",
    category: "activity",
  },
  {
    id: 8,
    title: "Walk in the park",
    adress: "Trädgårdsföreningen, Gothenburg",
    time: "09:00",
    category: "activity",
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
  },
});
