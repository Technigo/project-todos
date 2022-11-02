import { createSlice } from '@reduxjs/toolkit';
/* import uniqid from 'uniqid'
import moment from 'moment' */

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: []
  },
  reducers: {
    addTodo: (store, action) => {
      store.items.push(action.payload)

      /*  const newTodo = {
        id: uniqid(),
        text: action.payload,
        isCompleted: false,
        postedTime: moment().format('ddd D MMM')
      };
      store.items = [...store.items, newTodo]
      console.log(newTodo) */
    },
    toggleTodo: (store, action) => {
      /*  const updatedTodoList = store.items.map((item) => {
        console.log(item)
        if (item.id === action.payload) {
          const updatedTodo = { item, complete: !item.complete };
          return updatedTodo
        } else {
          return item;
        }
      });

      store.items = updatedTodoList; */
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed
        }
      })
    },
    /*   lateTodo: (store, action) => {
      const question = store.items.find((t) => t.id === id)

      const changeBgColor = () => {
        const test = document.getElementsByClassName('late')
        const color = 'red'
        for (let i = 0; i < test.length; i+ ) {
          test[i].style.background = color;
        }
        if (question.yesterday === action.payload) {
          store.yesterday = true
        }
      }
      changeBgColor()
    },
 */
    deleteTodo: (store, action) => {
      store.items.splice(action.payload, 1)
      /* const decreaseTodoList = store.items.filter((item) => item.id !== action.payload)
      store.items = decreaseTodoList; */
    }
  }
})

export default todos