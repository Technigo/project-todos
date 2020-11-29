import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [
    {
      id: 1,
      text: 'Answer emails',
      isComplete: false,
    },
    {
      id: 2,
      text: 'Workout',
      isComplete: true,
    },
    {
      id: 3,
      text: 'Eat icecream',
      isComplete: false,
    },
  ],
}

export const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    removeOne: (state, { payload: itemId }) => {
      return {
        ...state,
        items: state.items.filter(item => item.id !== itemId)
      }
    },
    removeAll: (state) => {
      return { ...state, items: [] }
    },
    addItem: (state, action) => {
      state.items.push(action.payload)
    },
    checkItem: (state, action) => {
      const itemDone = state.items.find((item) => item.id === action.payload);
      itemDone.isComplete = !itemDone.isComplete;
    },
    removeDone: (state) => {
      return {
        ...state,
        items: state.items.filter(item => item.isComplete === false)
      }
    },
  },
})
