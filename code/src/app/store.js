import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { listSlice } from "reducers/listSlice.js";

const reducer = combineReducers({
	listSlice: listSlice.reducer,
})

export const store = configureStore({
  reducer,
});
