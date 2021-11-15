import { createSlice } from '@reduxjs/toolkit'


const todos = createSlice({
    // every slice needs 3 properties: name, initialState and reducer 
    name:'todos',
    initialState: {
        items: [],
    },
    reducers: {
        //an object, each property is one method to update the store.
        // Each reducer is a property which is a function, always have 2 arguments, current value of store and an action 
        addTodo: (store, action) => {
            console.log(store);
            console.log(action) // consists of payload (the data) and type
        }
    }
})
export default todos