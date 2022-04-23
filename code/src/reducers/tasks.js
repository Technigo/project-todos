import { createSlice } from '@reduxjs/toolkit'


const tasks = createSlice ({
    name: 'tasks',
    initialState: {
      list: [],
      editItem:'', 
      editObject: {editText:'', editCategory:'',editDate:''},
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
                  const editedItem = {...item, 
                                      text: state.editObject.editText, 
                                      category: state.editObject.editCategory,
                                      dueDate: state.editObject.editDate
                                    } 
                  return editedItem;
                } else return item;
              })
              
                   state.list = newEditedList;
                   state.editItem = '';
                   state.editId = null;
                   state.isEditing = false;

                }
              
          },

          onChangeItemInput: (state,action) => {
            return {...state, editObject: {...state.editObject, editText: action.payload}}
          },

          onChangeCategory: (state,action) => {
            return {...state, editObject: {...state.editObject, editCategory: action.payload}}
          },

          onChangeDate: (state, action) => {
            return {...state, editObject: {...state.editObject, editDate: new Date(action.payload).getTime()}}
          },

          updateCompleteItem: (state, action) => {
          
          const updateList =  state.list.map(item => {
              if (item.id === action.payload) {
                const updateItem = {...item, complete: !item.complete}
                return updateItem;
              } else {
                return item;
              }
              
            })
            state.list = updateList;

          },
          
          completeAllItems: (state, action) => {
            if (action.payload) {
              const completeTodayTasks = action.payload.map(item => {
                const updateTodayTask = {...item, complete: true};
                return updateTodayTask;
              })
              state.list = completeTodayTasks;
            } else {
              const completeAllTasks = state.list.map(item => {
                const updateAllTasks = {...item, complete: true};
                return updateAllTasks;
              })
              state.list = completeAllTasks;
            }
          },

          editItem: (state, action) => {
            
            const findItem = state.list.find(item => item.id === action.payload)
      
      
            return {
              ...state, 
              editObject: { editText: findItem.text, editDate: findItem.dueDate, editCategory: findItem.category},
              editItem: findItem.text, 
              editId: findItem.id, 
              isEditing: true 
            };;
          },

          deleteItem: (state, action) => {

            const filterList = state.list.filter(item => item.id !== action.payload);
            state.list = filterList;

          },

          deleteAllItem: (state,action) => {
            const emptyList = [];
            state.list = emptyList;
          } 
        
      }
})


export default tasks;







