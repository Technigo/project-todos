import {createSlice} from '@reduxjs/toolkit'

export const tasks = createSlice({
	name: 'task',
	initialState: [
		{id: 1, text: 'Read a book', complete: true},
		{id: 2, text: 'Take the dog out', complete: true},
		{id: 3, text: 'Do laundry', complete: true},
		{id: 4, text: 'Make dinner', complete: false},
	]
})