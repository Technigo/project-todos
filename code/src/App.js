import React from 'react'
import {Home} from './pages/Home.js';


export const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

/*
 PLAN 
  - create TodoInput
  - create store
  - use Provider
  - create TodoList
  - create TodoItem
  - create TodoSummary
  - create Header with components like Summery

  - Do all this without breaking the code - changes should show

*/
// StoreCreation : Tell redux about our reducers - combined reducers

// Persistence: Retrieve the existing state from localstorage if it exists

// StoreCreation: Create the store using our reducers and the retrieved state

// Persistence: Tell the store to persist the state in localstorage after every action