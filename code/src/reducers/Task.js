/* A slice is a portion of the Redux store
that is responsible for managing a specific part of the application state.
createSlice will automatically generate action creators
with the names of the reducers that we provided,
and a reducer function that will update the current state, */

import { createSlice } from '@reduxjs/toolkit';

/* initialState is the default state or an initial value of
a Redux state slice or a reducer.
It's the starting point of a state tree before any action is dispatched,
which represents the minimal state that is required to render our application. */

const initialState = {
// items is property consisting of array
  items: [
  // object with info that will change when actions are dispatched
    {
      id: '19asdfiuhas0823hjkadsh809',
      content: 'New to-do',
      isChecked: false
    }
  ]
}

export const Task = createSlice({
/* We provide it with a unique name (same as const)
and an initialState ( entirely declared here or beforehand as in this exmple) */
  name: 'task',
  initialState,
  /* We then define a set of reducers using an object
with reducer functions for each action type that we want to handle.
Reducers are functions that will be performing operations on state
whenever we want something to happe to state we need to create one */
  reducers: {
    /* reducers is an object we are providing
    as an object it has properties and syntax needs to be colon : (not equal)
    */
    addNewTask: (store, action) => {
    /* first argument references the state of the store
    second argument references the data that is
    passed down from a component (because if something
    needs to be added, we need to get it from somewhere (component) */
      /* FIRST APPROACH (mutable) -> store.items.push(action.payload) <-
      pushing is 'mutable' approach -> state will change for entire application
      we're pushing data from user (thorugh component) with an action -> inside of our items array
      action (object) has two properties: type & payload(= everything we're passing down) */
      /* SECOND APPROACH (immutable) store.items = []
      will assign new value to items array instead of modifying array */
      store.items = [action.payload, ...store.items];
      /* spread operator ...
      const x = [a,b,c]
      const y = [x,'d'] => [[a,b,c], d] -> CREATES NESTING PROBLEM
      const z = [...x,'d'] => [a,b,c,d]
      const superobject {a:'test', b:'second test'}
      also works -> const superer object = {...superobject, c:'third test'}
      */
    },
    // no need for action as there's no payload
    deleteAllTasks: (store) => {
      store.items = [];
    },
    // need for action because we need info to find task - the id
    deleteSingleTask: (store, action) => {
      const id = action.payload;
      // splice method to remove single element from array based on index
      // copy array to work in immutable way
      const copyOfTaskArrayFromStoreState = store.items;
      // the id of element we're looking for needs to match action payload id
      const condition = (element) => element.id === id;
      // apply findIndex method to array copy with condition above
      const foundIndex = (copyOfTaskArrayFromStoreState.findIndex(condition));
      // remove 1 element from array whose id is 'foundIndex'
      copyOfTaskArrayFromStoreState.splice(foundIndex, 1);
      // assign new value to original array without mutating it
      store.items = copyOfTaskArrayFromStoreState;
    },
    // needs access to store to change checkbox for task
    // needs access to action to get id of task to be toggled
    toggleIdTaskIsCompleted: (store, action) => {
      const id = action.payload;
      // copy array to work in immutable way
      const copyOfTaskArrayFromStoreState = store.items;
      // the id of element we're looking for needs to match action payload id
      const condition = (element) => element.id === id;
      // apply findIndex method to array copy with condition above
      const foundIndex = (copyOfTaskArrayFromStoreState.findIndex(condition));
      // access task corresponding to index found, copy array and invert boolean (t/f)
      // eslint-disable-next-line max-len
      copyOfTaskArrayFromStoreState[foundIndex].isChecked = !copyOfTaskArrayFromStoreState[foundIndex].isChecked;
      // assign new value to original array without mutating it
      store.items = copyOfTaskArrayFromStoreState;
    }
  }
})
