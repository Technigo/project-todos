import { createSlice } from '@reduxjs/toolkit';

const myInitialState = {
	todos: [ 
    { id: 1, task: 'example task', taskDone: false }, 
    { id: 2, task: 'cook dinner', taskDone: false },
    { id: 3, task: 'buy birthday gift for John', taskDone: true }, 
    { id: 4, task: 'example task', taskDone: false } 
  ]
};
export const todoStore = createSlice({
	name: 'todoStore',
	initialState: myInitialState,
	reducers: {
		createTask: (state, action) => {
			let lastId = 0;
			if (state.todos.length !== 0) {
				lastId = state.todos[state.todos.length - 1].id;
			}
			state.todos.push({ id: lastId + 1, ...action.payload, taskDone: false });
		},

		removeTask: (state, action) => {
			console.log('from removeTask');
			const currentTaskId = action.payload.id;
			state.todos = state.todos.filter((task) => task.id !== currentTaskId);
		},

    clearAll: (state, action) =>{
      state.todos=[]
    },
		//console.log(array1.findIndex(isLargeNumber));
		statusTask: (state, action) => {
			console.log('from statudTask');
			const currentTaskId = action.payload.id;
			const myIndex = state.todos.findIndex((item) => item.id === currentTaskId);
			console.log('index', myIndex);
			if (action.payload.taskDone) {
				state.todos[myIndex].taskDone = false;
			} else {
				state.todos[myIndex].taskDone = true;
			}
		}
	}
});

// - Your app should list all todo tasks - completed or uncompleted --TaskList/Done
// - You should be able to mark an uncompleted task as complete --taskcomponent/notDone
// - You should be able to change a completed task back to uncomplete
// - You should be able to add new tasks
// - Your app should show a count of either all todos, or all uncomplete todos
