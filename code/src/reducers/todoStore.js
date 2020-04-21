import { createSlice } from '@reduxjs/toolkit';
// Inital state
const myInitialState = {
	todos: [
		{ id: 1, task: 'example task', dueDate: '2020-03-30', taskDone: false },
		{ id: 2, task: 'cook dinner', dueDate: '2020-04-30', taskDone: false },
		{ id: 3, task: 'buy birthday gift for John', dueDate: '2020-08-20', taskDone: false },
		{ id: 4, task: 'changing tires', dueDate: '2020-01-30', taskDone: true }
	]
};
// Todo Store
export const todoStore = createSlice({
	name: 'todoStore',
	initialState: myInitialState,
	reducers: {
		// Possible actione
		// New Task
		createTask: (state, action) => {
			let lastId = 0;
			if (state.todos.length !== 0) {
				lastId = state.todos[state.todos.length - 1].id;
			}
			state.todos.push({ id: lastId + 1, ...action.payload, taskDone: false });
		},
		// Remove Task
		removeTask: (state, action) => {
			console.log('from removeTask');
			const currentTaskId = action.payload.id;
			state.todos = state.todos.filter((task) => task.id !== currentTaskId);
		},
		// remove all tasks
		clearAll: (state, action) => {
			state.todos = [];
		},
		// change done on task
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
