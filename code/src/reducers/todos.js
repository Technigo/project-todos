import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  userName:'stranger',
  items: [
    {id:1, text:"wash the dishes", isComlete:false},
    {id:2, text:"wash the dishes", isComlete:false},
    {id:3, text:"wash the dishes", isComlete:false},
  ]
}

export const todos = createSlice({
  name: 'todos',
  initialState,  
  reducers: {

    addName:(state,action) => {
      state.userName = action.payload;
    },

    addItem: (state, action) => {  
        const newItem = {  
        id: Math.random(...state.items.map((item)=>item.id)),       
        text: action.payload,
        isComplete: false
      }
      const newItemsList = [...state.items, newItem]
      state.items = newItemsList;
    },
    removeOne: (state, action) => {
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      state.items = filteredItems;
    },
    toggleComplete: (state, action) => {
      const updatedArray = state.items.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            isComplete: !item.isComplete
          };
        } else {
          return item;
        }
      });
      state.items = updatedArray;
    },
      removeAll: (state) => {
      state.items = [];
    }
  },
});
