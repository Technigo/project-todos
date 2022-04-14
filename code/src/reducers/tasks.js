import { createSlice } from '@reduxjs/toolkit'


const tasks = createSlice ({
    name: 'tasks',
    initialState: {
      list: [ 
       

      ],
      editItem:'', 
      editId: null,
      isEditing: false
      
    },
      reducers: {
          
          addItem: (state, action) => {

              const existingEdititem = state.list.find(item => item.id === state.editId);

              if (existingEdititem) {

                 existingEdititem.text = state.editItem;
                 state.editItem = '';
                 state.editId = null;
                 state.isEditing = false;
                 
                } else {
                  state.list = [...state.list, action.payload];
                }
              
             
          },

          onChangeItemInput: (state,action) => {
            return {...state, editItem: action.payload}
          },

          editItem: (state, action) => {
            const findItem = state.list.find(item => item.id === action.payload)
      
      
            return {
              ...state, 
              editItem: findItem.text, 
              editId: findItem.id, 
              isEditing: true 
            };;
          },

          deleteItem: (state, action) => {
            const filterList = state.list.filter(item => item.id !== action.payload);
            state.list = filterList
          },

          deleteAllItem: (state,action) => {
            const emptyList = [];
            state.list = emptyList;
          } 
        
      }
})


export default tasks;







