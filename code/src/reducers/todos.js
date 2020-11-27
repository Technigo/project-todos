import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const todos = createSlice({
    name: 'todos',
    initialState: {
        items: [
            {
                id: uniqid(),
                text:'Submit project',
                isComplete: false,
            },
            {
                id: uniqid(),
                text:'Clean the house',
                isComplete: false,
            },
            {
                id: uniqid(),
                text:'Do the dishes',
                isComplete: false,
            } 
        ],
    },
    //The actions match the names of the reducers
    reducers: {
        removeItem: (state, action) => {
            console.log(state, action);
            const itemId = action.payload;
            const filteredList = state.items.filter((item => item.id !== itemId));
            state.items = filteredList;

        },
        changeItem: (state, action) => {
            console.log(action.payload);
            state.items = state.items.map((item => {
                if (item.id === action.payload.id) {
                    console.log(item);
                    item.isComplete = !item.isComplete;
                } return item;
            }));
        },
        addItem: {
            reducer(state, action) {
                state.items = [...state.items, action.payload];
            },
            prepare(text) {
                return {
                    payload: {
                        id: uniqid(),
                        text: text,
                        isComplete: false
                    }
                }
            }
        },
        removeAll: (state) => {
            state.items = []
        },
    }
}); 

export default todos;