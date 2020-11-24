import {createSlice} from '@reduxjs/toolkit'

const initialState = [
		{id: 1, text: 'Read a book', category: 'Self Care', complete: true},
		{id: 2, text: 'Take the dog out', category: 'Household', complete: true},
		{id: 3, text: 'Do laundry', category: 'Household', complete: true},
		{id: 4, text: 'Make dinner', category: 'Household', complete: false},
		{id: 5, text: 'Do some more coding', category:'Coding', complete: false}
]

export const tasks = createSlice({
	name: 'tasks',
	initialState: initialState
	
})