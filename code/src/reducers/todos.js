import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice ( {
name: 'todos',
initialState: {
    items: []
};


});

export default todos;