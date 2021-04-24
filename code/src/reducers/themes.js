import { createSlice } from "@reduxjs/toolkit";

import { boldTheme } from "../styledcomponents/StyledTheme";


export const themes = createSlice({
  name: "themes",
  initialState: { theme: boldTheme },
  reducers: {
    changeTheme: (state, action) => {
        state.theme = action.payload;
      },
  }
});