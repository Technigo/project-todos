import { createSlice } from '@reduxjs/toolkit'


const tasks = createSlice ({
    name: 'tasks',
    initialState: {
      storage: [],
      list: [],
      editItem:'', 
      editId: null,
      isEditing: false
      
    },
      reducers: {
          
          addItem: (state, action) => {
            
            if (!state.isEditing) {
              state.list = [...state.list, action.payload];


            } else {
              const newEditedList = state.list.map(item => {
                
                if (item.id === state.editId) {
                  const editedItem = {...item, text: state.editItem} 
                  return editedItem;
                } else return item;
              })
              
                   state.list = newEditedList;
                   state.editItem = '';
                   state.editId = null;
                   state.isEditing = false;

                }
                localStorage.setItem('item', JSON.stringify(state.list));

          },

          onChangeItemInput: (state,action) => {
            return {...state, editItem: action.payload}
          },

          updateCompleteItem: (state, action) => {
          
          const existingList= JSON.parse(localStorage.getItem('item'))
          const updateList =  existingList.map(item => {
              if (item.id === action.payload) {
                const updateItem = {...item, complete: !item.complete}
                return updateItem;
              } else {
                return item;
              }
              
            })
            state.list = updateList;
            localStorage.setItem('item', JSON.stringify(state.list));


          },

          editItem: (state, action) => {
            
            const existingList= JSON.parse(localStorage.getItem('item'))
            const findItem = existingList.find(item => item.id === action.payload)
      
      
            return {
              ...state, 
              editItem: findItem.text, 
              editId: findItem.id, 
              isEditing: true 
            };;
          },

          deleteItem: (state, action) => {

            
            const filterList = state.list.filter(item => item.id !== action.payload);
            state.list = filterList;
            localStorage.setItem('item', JSON.stringify(state.list));

          },

          deleteAllItem: (state,action) => {
            const emptyList = [];
            state.list = emptyList;
          } 
        
      }
})


export default tasks;







