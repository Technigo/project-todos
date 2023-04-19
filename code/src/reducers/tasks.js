// src/reducers/tasks.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = { // Variable/function that stores data,
  // allows us to create slices below. Equal to an object.
  items: [ // Inside variable = properties as an array.
    { // {} to create first object.
      id: 1, // Property.
      name: 'Watch video on actions & reducers',
      completed: false
    },
    { // Another object.
      id: 2,
      name: 'Follow redux codealong',
      completed: false
    },
    {
      id: 3,
      name: 'Fork weekly assignment',
      completed: false
    },
    {
      id: 4,
      name: 'Create a todo app',
      completed: false
    }]
}

const tasks = createSlice({ // Imported function as an argument.
  name: 'tasks', // Use same name as in const.
  initialState, // Referenced without value since JS sees variable above and
  // knows we want a property below called initialState and will set the value
  // to the value of the variable above called the same.
  reducers: {
  // Reducers = objects/functions that will be operating/performing different
  // operations on our state. When we want something to happen with the state
  // we need to create a function that will be able to modify that state.
  // Things inside this object are object properties so instead of an = sign
  // when we assign value to the object property, we use : . To add a task,
  // create a function.
    addTask: (store, action) => { // A function (= arrow), pushing data to items.
      store.items = [...store.items, action.payload] // Immutable approach.
    // markTaskAsCompleted: (store, action) => {
    // console.log(store);
    //   console.log(action);
    //   store.items.forEach((task) => {
    //     if (.id === action.payload) {
    //       task.completed = !task.completed
    //     }
    //   })
    // }
    }
  }
});

export default tasks;

// initialState could also be written as an object instead of outside of const (slice).
// Store as a reference, referencing the initialState and its content, and then we need
// an action. If we want to add something, we get it from a component. To make clear
// that the function takes an argument from a component, we need the action. Can be banana.
// Remember that the first argument references the state of the store, the second argument
// references the data that is passed down from a component.
// Now we push.
// Pushing is the mutable approach. What are we pushing inside our items array? Inside our
// items array we need to push the data that will be from the component/the user.
// store.items.push(action.payload)
// Mutable = Modifying original items array. The action has two properties, the type of
// this action ('pokemons' addPokemon) and the payload (everything we're passing down
// from addPokemon.js/from any component). When we want to access any data put into our
// reducer we need to acces it with action.payload. When you mutate the state of the store
// you might get a browser/peer warning since whenever we do operations on initialState/Store
// we are changing it for several components. We want everything to be the same until the
// time of the operation of us mutating it/pushing the data is over.

// Immutable approach = Assigning a new value for the whole items array instead of modifying
// it. Instead of attaching something, like with the push, to the end of our array we're
// assigning a whole new value. First it references itself (store.items), then references
// the action.payload. Expecting content of array.

// const x = ['a','b','c']
// const y = [x, 'd'] => [['a','b','c'], 'd'] If not using the spread operator.
// const z = [...x, 'd'] => ['a','b','c','d'] The spread operator takes the square
// brackets and removes them, putting everything inside of one array.
// const superObject = {a: 'test', b: 'other test'}
// const supererObject = {...superObject, c: 'third test'} The spread operator can
// also be used to add a property to an object.
// Spread operator removes nested array, you get the data but it is flattened out.