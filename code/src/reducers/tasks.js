import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 1,
        name: 'städa badrummet',
        isChecked: false },
      { id: 2,
        name: 'vattna blommor',
        isChecked: false },
      { id: 3,
        name: 'tvätta',
        isChecked: false }
    ]
  },
  reducers: {
    toggleChecked: (store, action) => {
      console.log(store)
      console.log(action)
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isChecked = !item.isChecked;
        }
      });
    }
  }
})

export default tasks;