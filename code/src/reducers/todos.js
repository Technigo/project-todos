import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";
import moment from "moment";

const initialState = {
    items: [
        {
            id: uniqid(),
            text: "Wash the dishes",
            checked: true,
            date: moment()
        },
        {
            id: uniqid(),
            text: "Buy grocery",
            checked: true,
            date: moment()
        },
        {
            id: uniqid(),
            text: "Make dinner",
            checked: false,
            date: moment()
        },
        {
            id: uniqid(),
            text: "Go to sleep",
            checked: false,
            date: moment()
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
                        checked: false,
                        date: moment()
                    }
                };
            }
        },
        setAllDone: (state, action) => {
            state.items = state.items
                .map((item) => {
                    item.checked = true
                    return item
                })
        },
        setAllUndone: (state, action) => {
            state.items = state.items
                .map((item) => {
                    item.checked = false
                    return item
                })
        },
        deleteAll: (state, action) => {
            state.items = []
        }
    }
})