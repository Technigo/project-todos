import {createSlice} from '@reduxjs/toolkit'
// import moment from 'moment'

const initialState = {
	list: {
		name: 'Task',
		tasks: [
		{id: 0, text: 'Read a book', category: 'Self Care', complete: true, checkedTodo: true, createdAt:""},
		{id: 1, text: 'Take the dog out', category: 'Household', complete: true, checkedTodo: false, createdAt:""},
		{id: 2, text: 'Do laundry', category: 'Household', complete: true, checkedTodo: true, createdAt:""},
		{id: 3, text: 'Make dinner', category: 'Household', complete: false, checkedTodo: true, createdAt:""},
		{id: 4, text: 'Do some more coding', category:'Coding', complete: false, checkedTodo: false, createdAt:""},
		{id: 5, text: 'Buy carrots', category:'Groceries', complete: false, checkedTodo: true, createdAt:""},
		{id: 6, text: 'Wash hair', category:'Other', complete: false, checkedTodo: false, createdAt:""}

]}}
	

export const tasks = createSlice({
	name: 'tasks',
	initialState: initialState,

	reducers: {
		taskAdded: (state, action) => {
			const {taskInfo} = action.payload
			state.list.tasks.push(taskInfo)
			//state.list.tasks.push({id:Date.now(), name: taskInfo, createdAt:moment()})

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

		removeAllTasks: (state, action) => {
			state.list.tasks = []
		}
	}	
})