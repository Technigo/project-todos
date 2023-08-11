import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
}
// the initial state of the todo-list is an empty array because
// there are no tasks in the list when the user enters the app.

const todolist = createSlice({
  name: 'tasks',
  isChecked: false,
  initialState,
  reducers: {
    addTask: (store, action) => {
    // first argument (store) references the state of the store, second
    // argument (action) references the data that is passed down from a component.
    // in this case that data would be the task the user writes in the text field.

      // MUTABLE:
      // store.items.push(action.payload)
      // IMMUTABLE:
      store.items = [action.payload, ...store.items]
      // the spread (...) syntax assigns a whole new value to the array and removes the nesting,
      // so you don't have an array within another array, like in the push method.
    },
    toggleTask: (store, action) => {
      const task = store.items.find((singletask) => singletask.id === action.payload);
      if (task) {
        task.isChecked = !task.isChecked;
      }
    },
    // this action toggles each individual task's checkbox between checked and unchecked:
    // if a single task in the task-array is not checked yet (the initial state of
    // "isChecked" is false), then pressing it will toggle the checkbox for that task only.

    deleteSingleTask: (store, action) => {
      const index = store.items.slice().reverse().findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        store.items.splice(store.items.length - 1 - index, 1);
      }
    },

    deleteAllTasks: (store) => {
      store.items = [];
    }
    // this action deletes all tasks by going back to the initial state, which is an empty array.
    // this action could also be: "return initialState;"
  }
});

export default todolist;