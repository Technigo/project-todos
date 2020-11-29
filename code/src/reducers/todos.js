import { createSlice } from '@reduxjs/toolkit'

const tasks = [
  { id: 1, text: 'eat', isComplete: false },
  { id: 2, text: 'pray', isComplete: false },
  { id: 3, text: 'love', isComplete: true },
]

const initialState = {
  tasks
}

const tasks2 = tasks
console.log(tasks2)

let idCounter = tasks.length
// idCounter is immutable and equals tasks.length at this "point in code"

// primitives (like numbers, strings) are immutable - reference is not updated
// array is an object.. sigh. objects (and hence arrays) are mutable - reference updates
// redux toolkit comes with a immmutability library immer, it is preventing us to write mutable code in the reducer

export const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: idCounter += 1, text: action.payload, isComplete: false })
      // push adds one item to the end of the existing array
      // should I create a new array instead, or toolkit handles the immutability for me?
    },
    removeTask: (state, action) => {
      // action has a key (here removeTask), and the value is a function.
      // redux will pass state and action to this function
      // the action has a name and a payload - whatever we pass into the action when we invoke it (in the component)
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
      // filter creates a new array
    },
    updateTask: (state, action) => {
      const updatedTask = state.tasks.find(task => task.id === action.payload.id)
      // find returns value of the first element that satisfies the condition
      if (action.payload.isComplete === false) {
        updatedTask.isComplete = true
      } else if (action.payload.isComplete === true) {
        updatedTask.isComplete = false
      }
    }
  }
})