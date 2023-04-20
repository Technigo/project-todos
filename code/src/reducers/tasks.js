// The functionality needs to be here before we can access it anywhere else.
// src/reducers/tasks.js
/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const initialState = { // Variable/function that stores data,
  // allows us to create slices below. Equal to an object.
  items: [ // Inside variable = properties as an array of objects. Items = tasks.
    { // {} to create first object.
      id: 1, // Property.
      name: 'Watch video on actions & reducers',
      isCompleted: false
    },
    { // Another object.
      id: 2,
      name: 'Follow redux codealong',
      isCompleted: false
    },
    {
      id: 3,
      name: 'Fork weekly assignment',
      isCompleted: false
    },
    {
      id: 4,
      name: 'Create a todo app',
      isCompleted: false
    }]
}
// We can access the size of an array, the number of tasks, through property length.

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
    addTask: (store, action) => { // Function (= arrow) w/ 2 arguments, pushing
      // data to items. The store references everything in the store state.
      // The action is for us to see what we're passing from the component.
      store.items = [action.payload, ...store.items]; // Immutable approach.
      // Assigning new value. Set. Store.items is set to new array with some
      // and previous destructured action payload.
      // const copy = store.items;
      // copy.push(action.payload); // Push adds at the end of the array.
      // copy.unshift(action.payload); // Unshift adds at the beginning of the array.
      // store.items = copy;
    },
    deleteSingleTask: (store, action) => { // Functionality. Action because
      // to find single task we need info, unique = the id.
      const id = action.payload; // const { id } = destructured, expecting component
      // to provide an id. Google, js delete element from array = index and splice.
      // Splice to remove a single element if I know the index. js index of object in
      // array. { } works when passing/sending/destructuring an object with the
      // property id. Otherwise, no { } needed. Assign id.
      console.log('action.payload', action.payload) // action.payload is the id.
      const copyOfTaskArrayFromStore = store.items; // An array. From state of store.
      // Used bc don't want to modify. Operate on copy. _Come back to this_20/4_26:18
      const condition = (element) => element.id === id; // Condition.
      // Now modify array.
      const foundIndex = copyOfTaskArrayFromStore.findIndex(condition);
      copyOfTaskArrayFromStore.splice(foundIndex, 1);
      store.items = copyOfTaskArrayFromStore;
    },
    // Frontend is in the end doing forms, checkboxes in those are painful.
    toggleIfTaskIsCompleted: (store, action) => { // Still needs access to store
      // because we need to change the checkbox for that task and action to get the
      // task id.
      const id = action.payload;
      console.log('action.payload', action.payload)
      const copyOfTaskArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfTaskArrayFromStore.findIndex(condition);
      // Change comes below in the splice. We don't want to splice because we want
      // the array to have same length as before. Want the task that has been completed.
      // isCompleted = property.
      copyOfTaskArrayFromStore[foundIndex].isCompleted = !copyOfTaskArrayFromStore[foundIndex].isCompleted;
      // ! says it should be the opposite.
      store.items = copyOfTaskArrayFromStore; // Assigning store.items to copyOfEtc.
    },
    deleteAllTask: (store) => { // Won't need payload.
      store.items = [];
    }
  }
});

export default tasks;

// Consistency in store.items = something. Return initialState is returning. Returning instate
// would not work due to already items. Otherwise, empty array, that would work.

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

// Filter is not enough to create a change by itself. Good to display things inside
// state variable but not for permanenting deleting. Semantics.