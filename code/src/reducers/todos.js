import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list : {
    name : "TodoList",
    items : [
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
    },
    setTaskDone: (state, action) => {
      const { itemIndex, done }  = action.payload;
      state.list.items[itemIndex].done = done;
    },
    removeTask : (state,action) => {
      const { itemIndex } = action.payload;
      state.list.items = state.list.items.filter(
       (item,index) => 
        index !== itemIndex
      )
    },
    removeAllTasks : () => {
      return initialState;
    },
    setAllTasksDone : (state) => {
        state.list.items = state.list.items.map(item => {
            return{
              ...item,
              done : true
            }
        }
        
          );
    }
  }
 
})