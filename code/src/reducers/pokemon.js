import { createSlice } from '@reduxjs/toolkit';

const initialState = { // Variable.
  items: [ // Inside it we write properties, as an array.
    { // Inside, create an object. Default first state for the pokemon.
      id: 'fldksflkds1', // Property.
      name: 'Jigglypuff',
      isCaught: false // A boolean.
    },
    { // Another object.
      id: 'fldksflkds2',
      name: 'Snorlax',
      isCaught: true
    },
    {
      id: 'fldksflkds3',
      name: 'Mewtwo',
      isCaught: false
    },
    {
      id: 'fldksflkds4',
      name: 'Oddish',
      isCaught: true
    }]
}

// Function which allows us to create our slice

const pokemons = createSlice({ // Use the imported function, createSlice,
  // as an argument = several things to go inside this function).
  name: 'pokemons', // Use same name as in const.
  initialState, // Either written as an object written below or or outside
  // of our (create slice) const pokemons we write const initialState which
  // will be equal to an object. Then reference it in constPokemons without
  // value, since JS sees the variable above and knows we want a property
  // below called initialState and will set the value to the value of the
  // variable above called the same.
  reducers: {
    // An object, and our reducers are functions that will be
    // operating, performing different operations on our state. When we
    // want something to hppen with it we need to create a function that
    // will be able to modify that state. Things inside this object are
    // object properties so instead of an = sign when we assign value to
    // ob prop , we use : . To add pokemon create a function.
    addPokemon: (store, action) => {
      // Needs to be an arrow function. Pushing data to our items. We need
      // a store as a reference, referencing the // initialState and its
      // content, and then we need an action. If we want to add something,
      // we get it from a component. To make clear that the function takes
      // an argument from a component, we need the action. Can be banana.
      // Remember that the first argument references the state of the store,
      // the second argument references the data that is passed down from a
      // component.
      // Now we push.
      // Pushing is the mutable approach. What are we pushing inside our
      // items array? Inside our items array we need to push the data that
      // will be from the component/the user.
      // store.items.push(action.payload) // Mutable. *Modifying original
      // items array. The action has two properties, the type of this action
      // ('pokemons' addPokemon) and the payload (everything we're passing down
      // from addPokemon.js/from any component). When we want to access any
      // data put into our reducer we need to acces it with action.payload.
      // When you mutate the state of the store you might get a browser/peer
      // warning since whenever we do operations on initialState/Store we
      // are changing it for several components. We want everything to be
      // the same until the time of the operation of us mutating it/pushing
      // the data is over.
      store.items = [...store.items, action.payload] // Immutable approach.
      // *Assigning a new value for the whole items array instead of modifying
      // it. Instead of attaching something, like with the push, to the end
      // of our array we're assigning a whole new value. First it references
      // itself (store.items), then references the action.payload. Expecting content of array.

      // const x = ['a','b','c']
      // const y = [x, 'd'] => [['a','b','c'], 'd'] If not using the spread operator.
      // const z = [...x, 'd'] => ['a','b','c','d'] The spread operator takes the square
      // brackets and removes them, putting everything inside of one array.
      // const superObject = {a: 'test', b: 'other test'}
      // const supererObject = {...superObject, c: 'third test'} The spread operator can
      // also be used to add a property to an object.
    }
  // Spread operator removes nested array, you get the data but it is flattened out.
  }
});

export default pokemons;