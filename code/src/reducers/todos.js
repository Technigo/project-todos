import { createSlice } from "@reduxjs/toolkit";

const data =  [
    {
      id: 'skjdf',
      listitem: 'shop grocerys',
      isDone: false
    },
    {
      id: 'ldkfj',
      listitem: 'spinning',
      isDone: false
    }
  ]

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: data
  },
  reducers: {}
});

export default todos;