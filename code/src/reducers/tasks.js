import {createSlice} from '@reduxjs/toolkit'
import moment from "moment"
const initialState = {
	
	items: [
		{id: 1, name: 'Read a book', category: 'Self Care', complete: true, checked: true},
		{id: 2, name: 'Take the dog out', category: 'Household', complete: true, checked: false},
		{id: 3, name: 'Do laundry', category: 'Household', complete: true, checked: true},
		{id: 4, name: 'Make dinner', category: 'Household', complete: false, checked: true},
		{id: 5, name: 'Do some more coding', category:'Coding', complete: false, checked: false},
		{id: 6, name: 'Buy carrots', category:'Groceries', complete: false, checked: true},
		{id: 7, name: 'Wash hair', category:'Other', complete: false, checked: false}

]}

export const tasks = createSlice({
	name: 'tasks',
	initialState: initialState,

	reducers: {
		taskAdded: (state, action) => {
			state.items.push({id: Date.now(), name: action.payload, createdAt:moment()})
		},
		taskRemoved: (state, action) => {
			state.items=state.items.filter((item)=> item.id!==action.payload)
		},
		removeAllTasks: (state) => {
			state.items=[]
		},
		checkTodoTask: (state,action) => {
			const checkedTask = state.items.find((item) => item.id===action.payload)

			if(checkedTask){
				checkedTask.checked = !checkedTask.checked
			}
		}
	}
	
})