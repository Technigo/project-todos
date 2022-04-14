import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "listSlice",
  initialState: {
		items: [],
	},
  reducers: {
    addTask: (store, action) => {
      store.items = [...store.items, action.payload];
    },
    removeTask: () => {},
    toggleTaskStatus: () => {},
    // resetTaskList: (store) => {
    //   return initialState;
    // },
  },
});
