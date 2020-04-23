import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  list: {
    name: 'list',
    items: [
        {
            description: "Go to the gym",
            done: false
        }
    ]
  }

};

export const todos = createSlice({
    name: "todos", 
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const { itemInfo } = action.payload;
            state.list.items.push(itemInfo);
        },

        removeTodo: (state, action) => {
            const { itemIndex } = action.payload;
            state.list.items = state.list.items.filter(
                (item, index) => index !== itemIndex
            );
        },

        removeAll: (state) => {
            state.list.items = [];
          },

        setDone: (state, action) => {
            const { itemIndex, done } = action.payload;
            state.list.items[itemIndex].done = done;
        },
        
    }

});

