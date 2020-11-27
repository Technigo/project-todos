import { createSlice } from '@reduxjs/toolkit'; 

const initialState = {
  items: [
    { id: 1, 
      text: 'Code 👾', 
      complete: false
    },
    { id: 2, 
      text: ' Dream ✨ ', 
      complete: false
    },
    { id: 3, 
      text: 'Love 🎈', 
      complete: false,
    },
  ],
};

export const todos = createSlice({
  name:"todos",
    initialState, 
    reducers: {
      // adding to-do receives a payload when dispatched, which inludes the whole
      // item object and uses push to add the new item to the array. Function 
      // button defined in AddTodo.js
      addTodo: (store, action) => { 
        const item  = action.payload
        store.items.push(item);
      },
      // removing to-do, pop only removed the last item added to the list. 
      // changed this by having an item id based on the date and time it was created 
      // and then doing a filter() which returns all the tasks in the array, except the one 
      // matching with the payload. The function button is defined in Item.js
      removeTodo: (store, action) => {
        const { todoId } = action.payload;
        store.items = store.items.filter(a => a.id !==todoId);
      },
      // mark a task as completed and change it back to uncompleted 
      // setComplete as a payload that has the id and what the complete property
      //should be set to. First step: use find() that compares the id from the global array
      //to the one in the payload, then it changest he complete property.

      setComplete: (store, action) => {
        const { todoId, complete } = action.payload 
        const matchingTodoId = store.items.find((item) => item.id === todoId);

        if(matchingTodoId) {
          matchingTodoId.complete = complete;
        }
      },
      
      //Clears the to dos list
      removeAll: (store) => { 
        store.items = []
      }
  }
});
