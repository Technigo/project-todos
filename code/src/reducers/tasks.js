import {createSlice} from '@reduxjs/toolkit'
import moment from "moment"
const initialState = {
	
	items: [
		{id: 1, text: 'Read a book', category: 'Self Care', complete: true,},
		{id: 2, text: 'Take the dog out', category: 'Household', complete: true,},
		{id: 3, text: 'Do laundry', category: 'Household', complete: true,},
		{id: 4, text: 'Make dinner', category: 'Household', complete: false,},
		{id: 5, text: 'Do some more coding', category:'Coding', complete: false,},
		{id: 6, text: 'Buy carrots', category:'Groceries', complete: false,},
		{id: 7, text: 'Wash hair', category:'Other', complete: false,}

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
		
	}
	
})