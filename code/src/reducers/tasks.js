import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	list: {
		name: 'Task',
		tasks: [
		{id: 0, text: 'Read a book', category: 'Self Care', complete: true, checkedTodo: true},
		{id: 1, text: 'Take the dog out', category: 'Household', complete: true, checkedTodo: false},
		{id: 2, text: 'Do laundry', category: 'Household', complete: true, checkedTodo: true},
		{id: 3, text: 'Make dinner', category: 'Household', complete: false, checkedTodo: true},
		{id: 4, text: 'Do some more coding', category:'Coding', complete: false, checkedTodo: false},
		{id: 5, text: 'Buy carrots', category:'Groceries', complete: false, checkedTodo: true},
		{id: 6, text: 'Wash hair', category:'Other', complete: false, checkedTodo: false}

]}}
	

export const tasks = createSlice({
	name: 'tasks',
	initialState: initialState,

	reducers: {
		taskAdded: (state, action) => {
			const {taskInfo} = action.payload
			state.list.tasks.push(taskInfo)
		},

		taskRemoved: (state, action) => {
			const {taskIndex} = action.payload
			state.list.tasks=state.list.tasks.filter(
				(task, index) => index !==taskIndex
			)
		},

		checkTodoTask: (state,action) => {
			const{taskIndex, complete} = action.payload
			state.list.tasks[taskIndex].complete=complete
		},

		// removeOne: (state, action) => {
		// 	state.list.tasks = state.list.tasks.find((task)=>
		// 	task.id!==action.payload)
		// },

		removeAllTasks: (state, action) => {
			state.list.tasks = []
		}
	}	
})