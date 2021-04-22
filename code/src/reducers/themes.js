import { createSlice } from "@reduxjs/toolkit";
import { 
    blueTheme, 
    redTheme, 
    greenTheme, 
    yellowTheme, 
    pinkTheme, 
    purpleTheme, 
    boldTheme,
    grayTheme,
    whiteTheme } from "../styledcomponents/StyledTheme";

const initialState = {
  theme: grayTheme
};


export const themes = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeRedTheme: (state) => {
      state.theme = redTheme;
    },
    changeGreenTheme: (state) => {
      state.theme = greenTheme;
    },
    changeYellowTheme: (state) => {
      state.theme = yellowTheme;
    },
    changePinkTheme: (state) => {
      state.theme = pinkTheme;
    },
    changePurpleTheme: (state) => {
      state.theme = purpleTheme;
    },
    changeBlueTheme: (state) => {
      state.theme = blueTheme;
    },
    changeBoldTheme: (state) => {
      state.theme = boldTheme;
    },
    changeWhiteTheme: (state) => {
        state.theme = whiteTheme;
    },
    changeGrayTheme: () => {
      return initialState;
    },
  }
});