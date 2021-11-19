import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid';


const tasks = createSlice({
  name: 'tasks',
  initialState: { items: [],
},

reducers: {
  addTasks: (store, action) => {
    //   const data = action.payload;
      const newTask = {
          id: uniqid(),
          text: action.payload,
          isComplete: false
      }

      store.items = [...store.items, newTask];
    },
    toggleTasks: (store, action) => {
        const updatedItems = store.items.map((item) => {
            if (item.id === action.payload) {
                const updatedTodo = {
                    id: item.id,
                    text: item.text,
                    isComplete: item.isComplete,
                    // ...item,
                    isComplete: !item.isComplete,
                };
                return updatedTodo;
            } else {
                return item;
            }
});

store.items = updatedItems;
		},
		deleteTodo: (store, action) => {
			// v1 Mutability approach (index in action.payload)
			// store.items.splice(action.payload, 1);

			// v2 Immutability approach (id in action.payload)
			const decreasedItems = store.items.filter(
				(item) => item.id !== action.payload
        );

			store.items = decreasedItems;
		},
	},
});

// ...store.items  means whatever was there before
// reducer is just an object, addTasks is just a property
    // addTasks: (store, action) Always use the store, but only sometimes action
    

export default tasks;

// export default tasks only works if I import it without {} 
// however if I export the const directly then I have to import it with {}

// initialState is also an object, will always be an object and inside it you can write as many properties as you want. 
// reducers is also an object where each property is a method to update the store

// { id: 1, text: 'Watch video on actions & reducers', complete: true },
//     { id: 2, text: 'Follow redux codealong', complete: true },
//     { id: 3, text: 'Fork weekly assignment', complete: true },
//     { id: 4, text: 'Create a todo app', complete: false },