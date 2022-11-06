import { createSlice } from '@reduxjs/toolkit'; //create reducers in an easy way, split logic and be able to access/change through out applications

const todoSlice = createSlice({
	//contain all info about reducers, actions we want to take on the state and the name of the state
	name: 'todo',
	initialState: { value: {} }, //initial value exist, in value should contain the actual value of the state
	reducers: {
		/* creating a function */
	},
});
