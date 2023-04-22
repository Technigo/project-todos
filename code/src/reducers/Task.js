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
      content: 'Wake up',
      isChecked: false
    },
    {
      id: '19asdfiuhas0823hjkadsh810',
      content: 'Code something cool',
      isChecked: false
    },
    {
      id: '19asdfiuhas0823hjkadsh811',
      content: 'Eat ice cream',
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
      store.items = [...store.items, action.payload];
      /* spread operator ...
      const x = [a,b,c]
      const y = [x,'d'] => [[a,b,c], d] -> CREATES NESTING PROBLEM
      const z = [...x,'d'] => [a,b,c,d]
      const superobject {a:'test', b:'second test'}
      also works -> const superer object = {...superobject, c:'third test'}
      */
    }
  }
})
