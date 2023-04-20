import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savedItems: [
    {
      id: '3ttq45',
      name: 'Saved1',
      isDone: false,
      prioritized: false
    }
  ]
}
const vault = createSlice({
  name: 'vault',
  initialState,
  reducers: {
    setupStore: (store, action) => {
      store.savedItems = action.payload;
    },
    addToVault: (store, action) => {
      console.log(action.payload)
      const savedTodo = store.savedItems.find((item) => item.id === action.payload.id)
      console.log('savedTodo:', savedTodo);
      if (!savedTodo) {
        store.savedItems = [...store.savedItems, action.payload]
        console.log(store.savedItems)
      } else if (savedTodo) {
        return store;
      }
      localStorage.setItem('vaultList', JSON.stringify(store.savedItems));
      console.log(savedTodo)
    }
  }
})

export default vault;