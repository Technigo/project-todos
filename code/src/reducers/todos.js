import { createSlice } from '@reduxjs/toolkit'

const tasks = [
  { id: 1, text: 'love', isComplete: false },
  { id: 2, text: 'pray', isComplete: false },
  { id: 3, text: 'eat', isComplete: true },
]

const initialState = {
  tasks
}

let idCounter = tasks.length
// idCounter is immutable and equals tasks.length at this "point in code"

export const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, { id: idCounter += 1, text: action.payload, isComplete: false }]
      // we are setting current state of tasks to a new array, containing the added task in the end
      // ...state.tasks creates a new array containing content from the original array

      // original code: state.tasks.push({ id: idCounter += 1, text: action.payload, isComplete: false })
      // push adds one item to the end of the existing array, and mutates the existing array
      // immer handles the mutability issue for us, so this is ok with immer - but a bad habit, even though it works
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
      // filter creates a new array based on the provided condition
      // as filter is creating a new array hence being immutable by nature, this code is ok
    },
    updateTask: (state, action) => {
      const updatedTask = state.tasks.find(task => task.id === action.payload.id)
      // find returns value of the first element that satisfies the condition
      if (action.payload.isComplete === false) {
        state.tasks = [...state.tasks]; // create new array not to mutate original array, works without this due to immer - but bad habit code
        updatedTask.isComplete = true;
      } else if (action.payload.isComplete === true) {
        state.tasks = [...state.tasks];
        updatedTask.isComplete = false;
      }
    }
  }
})