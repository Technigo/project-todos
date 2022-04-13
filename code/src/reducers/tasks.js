import { createSlice } from '@reduxjs/toolkit'


const tasks = createSlice ({
    name: 'tasks',
    initialState: {
      list: [
        { id: 1, text: 'Watch video on actions & reducers', complete: true },
        { id: 2, text: 'Follow redux codealong', complete: true },
        { id: 3, text: 'Fork weekly assignment', complete: true },
        { id: 4, text: 'Create a todo app', complete: false },

      ],
    
      editItem:'', 
      isEditing: false,
      editId: null
    },
      reducers: {
          

          addItem: (state, action) => {
            state.list.push(action.payload)
            state.isEditing = false
        

          },

          onChangeItemInput: (state,action) => {
            state.editItem = action.payload;
          },

          editItem: (state, action) => {
            const findItem = state.list.find(item => item.id === action.payload);
            state.isEditing = true
            state.editItem = findItem.text
          },

          deleteAllItem: (state,action) => {
              state.list = [];
          } 
        
      }
})


export default tasks;
