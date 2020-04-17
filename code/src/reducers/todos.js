import { createSlice } from "@reduxjs/toolkit"
import React from "react"
import Moment from 'react-moment'

const initialState = {
    list: {
        name: "Test list",
        items: [
            {
                description: "This is a test todo",
                done: false,
                created: <Moment fromNow>{new Date(Date.now())}</Moment>,
                calendar: false,
                dueDate: null,
            }
        ]
    }
};


export const todos = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {

        addTodo: (state, action) => {
            const { itemInfo } = action.payload;
            state.list.items.push(itemInfo);
        },

        removeTodo: (state, action) => {
            const { itemIndex } = action.payload;
            state.list.items = state.list.items.filter(
                (item, index) => index !== itemIndex
            );
        },

        toggleDone: (state, action) => {
            const { itemIndex, done } = action.payload;
            state.list.items[itemIndex].done = done;
        },

        toggleCalendar: (state, action) => {
            const { itemIndex, calendar } = action.payload;
            state.list.items[itemIndex].calendar = calendar
        },

        setDueDate: (state, action) => {
            const { itemIndex, dueDate, calendar } = action.payload;
            state.list.items[itemIndex].dueDate = dueDate
            state.list.items[itemIndex].calendar = calendar
        }
    }
});