import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


export const tasks = createSlice({
    name: 'tasks',
    initialState: {
        items: []
    },
    reducers: {
        //Here I am creating an action in the reducers object. addItem is the name of the action
        addItem: (state, action) => { //redux is passing in two arguments
            state.items.push({ id: Date.now(), name: action.payload })

        },
        removeItem: (state, action) => {
            //find item in payload and remove it
            state.items = state.items.filter((items) => items.id !== action.payload)

        },
        removeAll: (state) =>{
            // return initialState
            state.items = []

   // state.items = state.items.splice((initialState) => initialState !== action.payload)
        // state.items = state.items.splice((items) => items !== action.payload)
        },
        countQuantity: (state, action) => {
            state.items.count(state.items)
        }
       
}
}
)