import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	list: {
		name: 'Todo List',
		items: [],
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
			const { itemIndex, isComplete: isDone } = action.payload;
			state.list.items[itemIndex].isComplete = isDone;
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
