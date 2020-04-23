import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: {
    name: "Shopping List",
    items: [
      {
        description: "Coffee",
        category: "groceries",
        cart: false
      }
    ]
  }
};

export const shoppings = createSlice({
  name: 'shoppings',
  initialState: initialState,
  reducers: {
    addShop: (state, action) => {
      const itemInfo = action.payload;
      state.list.items.push(itemInfo);
    },
    setDoneShop: (state, action) => {
      const { itemIndex, done } = action.payload
      state.list.items[itemIndex].done = done
    },
    removeShop: (state, action) => {
      const { itemIndex } = action.payload
      state.list.items = state.list.items.filter((item, index) => index !== itemIndex)
    }
  }
})