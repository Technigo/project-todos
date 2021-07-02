import { createSlice } from '@reduxjs/toolkit'

export const dialogs = createSlice({
  name: 'dialogs',
  initialState: {
    dialog1: false,
    dialog2: false
  },

  reducers: {

    openDialog: (state, action) => {
      if (action.payload === "ClearAll") {
        state.dialog2 = true
      } else {
        state.dialog1 = true
      }
    },
    closeDialog: (state) => {
      state.dialog1 = false
      state.dialog2 = false
    },
    deleteTask: (state) => {
      state.dialog1 = false
    }

  }
})