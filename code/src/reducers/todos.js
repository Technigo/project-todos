import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid"


const initialState = {
    items: [
        {
            id: uniqid(),
            text: "Wash the dishes",
            checked: true
        },
        {
            id: uniqid(),
            text: "Buy grocery",
            checked: true
        },
        {
            id: uniqid(),
            text: "Make dinner",
            checked: false
        },
        {
            id: uniqid(),
            text: "Go to sleep",
            checked: false
        }
    ]
}
export const todos = createSlice({
    name: "todos",
    initialState,
    reducers: {
        removeOne: (state, action) => {
            state.items = state.items
                .filter(item => item.id !== action.payload.id);
        },
        changeItem: (state, action) => {
            state.items = state.items
                .map(item => {
                    if (item.id === action.payload.id) {
                        item.checked = !item.checked
                    }
                    return item
                })
        },
        addItemFunc: {
            reducer(state, action) {
                state.items = [action.payload, ...state.items];
            },
            prepare(text) {
                return {
                    payload: {
                        id: uniqid(),
                        text: text,
                        checked: false
                    }
                };
            }
        }
    }
});