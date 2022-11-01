/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const toDos = createSlice({
  name: 'toDos',
  initialState: {
    items: [
      // { id: 'hjadhdj',
      //   name: 'Never Do',
      //   isCaught: false },
      // { id: 'hjadbgfgdhdj',
      //   name: 'Find out',
      //   isCaught: true }

      { id: 1, text: 'Watch video on actions & reducers', complete: true },
      { id: 2, text: 'Follow redux codealong', complete: true },
      { id: 3, text: 'Fork weekly assignment', complete: true },
      { id: 4, text: 'Create a todo app', complete: false }
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.find((item) => item.id === action.payload).complete = !store.items.find((item) => item.id === action.payload).complete;
      // store.items.forEach((item) => {
      //   if (item.id === action.payload) {
      //     item.isCaught = !item.isCaught
      //   }
      // });
    },
		addItem: (store, action) => {
			const existingToDo = store.items.find((item) => item.id === action.payload.id)
	
			if (existingToDo) {
				// increment quantity
				existingToDo.quantity += 1
			} else {
				// store.items.push(action.payload)
				store.items.push({ ...action.payload, quantity: 1 })
			}
		},
		removeItem: (store, action) => {
			const existingToDo = store.items.find((item) => item.id === action.payload.id)
			if (existingToDo && existingToDo.quantity === 1) {
				// remove it
				store.items = store.items.filter((item) => item.id !== action.payload.id)
			} else if (existingToDo) {
				existingToDo.quantity -= 1
			}
		}

  }
})

export default toDos;