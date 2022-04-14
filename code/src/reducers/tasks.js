import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	list: {
		name: 'To Do List',
		items: [
			{
				id: 0,
				text: 'Eat breakfast',
				isComplete: true,
			},
			{
				id: 1,
				text: 'Go to gym',
				isComplete: false,
			},
			{
				id: 3,
				text: 'Wash',
				isComplete: false,
			},
		],
	},
};

const tasks = createSlice({
	name: 'tasks',
	initialState: initialState,
	reducers: {
		addTask: (state, action) => {
			const itemInfo = action.payload;
			state.list.items.push(itemInfo);
		},
		toggleDone: (state, action) => {
			const { itemIndex, isComplete } = action.payload;
			state.list.items[itemIndex].isComplete = isComplete;
		},
		deleteTask: (state, action) => {
			const { itemIndex } = action.payload;
			state.list.items = state.list.items.filter(
				(item, index) => index !== itemIndex
			);
		},
		clearAll: (state) => {
			state.list.items = [];
		},
	},
});

export default tasks;
