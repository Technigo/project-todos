import React from 'react'
import { createSlice } from '@reduxjs/toolkit' 

//The Global State!
//Think about:
// what data do I want to have access to?
// what data will I need to modify in order for the components to have what they need to do their job
// in this case the global state needs to contain a list of todo items that contains specific pieces of inforamtion
//so as our initialState we create a list (either object or array) that in this case will have an object
//that contains an array of objects

const initialState = {
  list: {
    name: 'test list',
    items: [
      {
        description: 'this is a test todo',
        done: false
      }
    ]
  }
}

export const todoStore = createSlice( {
  name: 'todoStore',
  //the global state will have this state, until it changes
  initialState: initialState,
  reducers:{
    //addTodo
    addTodo: (state, action)=> {
    //the 'state' above reffers to the current state of the global state (above)
    //the action reffers to the changes made that will be reflected next time the state is updated.
      const {itemInfo} = action.payload
    //action contains payload wich will contain what ever we send in to it in the dispatch in TodoInput.js
      state.list.items.push(itemInfo)
    //this is where we push the payload into the store (updating the store) itemInfo = payload
    },
    setDone: (state, action) => {
      const {itemIndex, done} = action.payload
      state.list.items[itemIndex].done = done
      //itemIndex corresponds to the list item that we've clicked and we change the state of done
    }
    //removeTodo
    //setDone

  }
})