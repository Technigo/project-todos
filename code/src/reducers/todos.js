import { createSlice } from '@reduxjs/toolkit';


    const initialState = {
        list: {
            items: [
                // {
                //     id: 1,
                // task: "This is a test todo",
                // complete: false,
                // }
            ]    
        }
    };

    export const todos = createSlice({
    name: "todos",
    initialState: initialState,
    
    //     initialState: {
    //     items: [
    //         { task: 'Sleep', complete: true },
    //     ],
    // },

    reducers: {
        addTodo: (state, action) => {
            state.list.items.push(action.payload);
        },
        // removeOne: (state, action) => {
        //     state.items.pop();
        // },
        markCompleted: (state, action) => {
            const completedTask = state.list.items.find(item => item.id === action.payload);
            console.log(action.payload)
            if (completedTask) {
                completedTask.complete = !completedTask.complete;
            }
        },
        // removeTodo: (state, action) => {
        //     const { itemIndex } = action.payload;
        //     state.list.items = state.list.items.filter(
        //         (item, index) => index !== itemIndex);             
        // },

        removeTodo: (state, action) => {
            state.list.items = state.list.items.filter(item => item.id !== action.payload)
        },
        removeAllCompleted: (state, action) => {
            const filteredList = state.list.items.filter(
                (item) => !item.complete);
                state.list.items = filteredList;
        },
        removeAll: (state) => {
            state.list.items = []
          },


        // removeTodo: (state, action) => {
        //     const itemId = action.payload;

        //     const filteredList = state.items.filter(item => item.id !== itemId);

        //     state.items = filteredList;
        // },

    // markCompleted: (state, action) => {
    //     const foundTask = state.list.items.find((item) => item.id === action.payload)

    //     // Toogles between completed and not completed
    //     if (foundTask) {
    //         foundTask.complete = !foundTask.complete
    //     }; },
    
    // },
}
});

export default todos;