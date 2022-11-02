import { createSlice } from '@reduxjs/toolkit'

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    todos: [
      { id: 1, title: 'do dishes', isDone: false },
      { id: 2, title: 'take out trash', isDone: true },
      { id: 3, title: 'go to the dentist', isDone: false }
    ]
  },
  reducers:
  {
    markTaskAsDone: (store, action) => {
      console.log(store);
      console.log(action);
      store.todos.forEach((task) => {
        if (task.id === action.payload) {
          task.isDone = !task.isDone
        }
      })
    }
    // addNewTask: (store, action) => {
    // }
  }
});

export default tasks;

// import { createSlice } from '@reduxjs/toolkit'

// const tasks = createSlice({
//   name: 'taskList',
//   initialState: {
//     todos: [
//       { id: 1, description: 'do dishes', isDone: false },
//       { id: 2, description: 'take out trash', isDone: true },
//       { id: 3, description: 'go to the dentist', isDone: false }
//     ]
//   },
//   reducers:
//   {
//     markTaskAsDone: (store, action) => {
//       console.log(store);
//       console.log(action);
//       store.todos.forEach((task) => {
//         if (task.id === action.payload) {
//           task.isDone = !task.isDone
//         }
//       })
//     },
//     addNewTask: (store, action) =>
//     {
//  store.taskList = [...state.taskList, action.payload]
// }
// }
// }
// });

// export default tasks;

