import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

export const fridge = createSlice({
    name: 'fridge',
    initialState: {
        items: []
    },
    reducers: {
        //Here I am creating an action in the reducers object. addItem is the name of the action
        addItem: (state, action) => { //redux is passing in two arguments
            console.log('current state', state)
            console.log('action', action)
            state.items.push({ id: Date.now(), name: action.payload })

        }

    }
})