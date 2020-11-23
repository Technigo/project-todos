import { createSlice } from '@reduxjs/toolkit'; 

const initialState = {
  items: [
    { id: 1, text: 'The first todo' },
    { id: 2, text: 'The second todo' },
    { id: 3, text: 'The third' },
  ],
};

export const todos = createSlice({
  name:"todos",
    initialState, 
    reducers: {
      // adding to-do 
      addTodo: (state, action) => { 
        const { todoInfo } = action.payload
        state.items.push(todoInfo);
      },
      // removing to-do
      removeTodo: (state, action) => {
        state.items.pop();
      },
  }
});
