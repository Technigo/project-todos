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
        const item  = action.payload
        state.items.push(item);
      },
      // removing to-do, pop only removed the last item added to the list. 
      // change to a specific task 

      removeTodo: (state, action) => {
        const { todoId } = action.payload;
        state.items = state.items.filter(a => a.id !==todoId);
      },
  }
});
