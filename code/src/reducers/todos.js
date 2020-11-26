import { createSlice } from '@reduxjs/toolkit';
// import Moment from 'moment';
import uniqid from 'uniqid';

const todos = createSlice({
    name: 'todos',
    initialState: {
        items: [
            {
                id: uniqid(),
                text:'The first todo',
                isComplete: false,
                // timeStamp: Moment(createdAt).fromNow()
            },
            {
                id: uniqid(),
                text:'The second todo',
                isComplete: false,
                // timeStamp: Moment(createdAt).fromNow()
            },
            {
                id: uniqid(),
                text:'The third todo',
                isComplete: false,
                //timeStamp: Moment(createdAt).fromNow()
            } 
        ],
    },
    reducers: {
        removeItem: (state, action) => {
            console.log(state, action);
            const itemId = action.payload;
            const filteredList = state.items.filter((item => item.id !== itemId));
            state.items = filteredList;

        },
        changeItem: (state, action) => {
            console.log(state.action);
            state.items = state.items.map((item => {
                if (item.id === action.payload.id) {
                    item.checked = !item.checked
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
        }
    }
        // addTodo: (state, action) => {
        //     const { itemInfo } =action.payload;
        //     state.items.push(itemInfo);
}); 

export default todos;