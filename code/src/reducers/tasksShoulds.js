import { createSlice } from '@reduxjs/toolkit'

const tasksShoulds = createSlice({
  name: 'tasksShoulds',
  initialState: {
    items: [
      { id: 1, text: 'shoulds', complete: false },
      { id: 2, text: 'Clean apartment', complete: false },
      { id: 3, text: 'Pick up package', complete: false },
      { id: 4, text: 'Call mum', complete: false }
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.complete = !item.complete
        }
      });
    }
  }
});

export default tasksShoulds;
