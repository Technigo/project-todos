import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
// import moment from 'moment'

// const initialState = {
//   list: {
//     name: "Todo",
//     todos: [
//       {
//         id: 1,
//         text: 'Walk the dog',
//         time: '1 hour ago',
//         complete: true
//       },
//       {
//         id: 2,
//         text: 'Apply for jobs!!',
//         time: '3 days ago',
//         complete: false
//       },
//       {
//         id: 3,
//         text: 'Buy candy?',
//         time: '36 min ago',
//         complete: false
//       }
//     ]
//   }
// }

const initialState = {
  list: {
    name: 'Todo',
    todos: [
      {
        text: 'Buy Candy!',
        complete: false,
        time: moment().subtract(1, 'days')
      },
      {
        text: 'Walk the dog',
        complete: true,
        time: moment().subtract(2, 'hours')
      },
      {
        text: 'Apply for jobs 🌸',
        complete: false,
        time: moment().subtract(5, 'days')
      }
    ]
  }
}

export const todos = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const { todoInfo } = action.payload
      state.list.todos.push(todoInfo)
      },
      // state.todos.push({
      //   id: state.todos.length + 1,
      //   text: action.payload,
      //   time: moment().fromNow(),
      //   complete: false  
      // })
    // },

    removeItem: (state, action) => {
      const { todoIndex } = action.payload
      state.list.todos = state.list.todos.filter(
        (todo, index) => index !== todoIndex
      )
      // state.todos = state.todos.find((todo) =>
      // todo.id !== action.payload)
    },

    setDone: (state, action) => {
      const { todoIndex, complete } = action.payload
      state.list.todos[todoIndex].complete = complete

      // const checkTodo = state.todos.find((todo) =>
      // todo.id === action.payload)

      // if (checkTodo) {
      //   checkTodo.complete = !checkTodo.complete
      // }
    },

    removeAll: (state, action) => {
      state.list.todos = []
    }

    // clearAll: (state, action) => {
    //   state.todos = []
    // }
  }
})
