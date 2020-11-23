import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list : {
    name : "TodoList",
    items : [
      {
        text : "first Test todo-item",
        done : false
      },
      {
        text : "second Test todo-item",
        done : false
      }
    ]
  }
}

export const todos = createSlice({
  name: 'todos',
  initialState : initialState,
  //here are the functions called by dispatch
  reducers: {
    addToDo:(state,action) => {
      const { itemInfo } = action.payload;
      state.list.items.push(itemInfo);
    }
  }
 
})