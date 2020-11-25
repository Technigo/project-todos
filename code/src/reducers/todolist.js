import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 0,
      text: 'Continue with code along',
      complete: false,
      category: 'Studies'
    },
    {
      id: 1,
      text: 'Clean the office room',
      complete: false,
      category: 'House Chores'
    },
    {
      id: 2,
      text: 'Buy more bread',
      complete: false,
      category: 'Shopping List'
    },
    {
      id: 3,
      text: '30 minutes cardio!',
      complete: false,
      category: 'Other'
    }
  ]
};

export const todolist = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    // addToDo receives a payload when dispatched: this payload includes an object including
    // all the data for a new task to be added to the to do list. So this action just adds
    // this newToDo object to the global state array, and then we reassign the current to do
    // list, to the newList containing the new task we just added.
    addToDo: (state, action) => {
      const newToDo = action.payload;
      const newList = [...state.items, newToDo];
      state.items = newList;
    },
    // changeComplete receives a payload with the itemId and what the complete property should 
    // be changed to: so I need first need to find the specific task we are referring to, by
    // performing a find() which compares the id I got in the payload, with the ids of the items in
    // my global state. Then I change the complete value for the matching task
    changeComplete: (state, action) => {
      const { itemId, complete } = action.payload;
      const matchingTask = state.items.find((item) => item.id === itemId );

      if(matchingTask) {
        matchingTask.complete = complete;
      }
    },
    // removeToDo gets payload including the id of the task to be removed. So I perform a filter
    // which will return all tasks on the list, except the one matching the id I got from
    // the payload, with the id of the task in the global state
    removeToDo: (state, action) => {
      const { itemId } = action.payload;
      state.items = state.items.filter(x => x.id !== itemId);
    }
  }
});
