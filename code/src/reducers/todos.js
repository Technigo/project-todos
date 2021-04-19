import { createSlice } from '@reduxjs/toolkit';

//TASKLIST
const todos  = createSlice({
    name: 'todos',
    initialState: {
    items: [
            { id: 1, text: 'bla bla bla 1', isComplete: false },
        ]
    },
    reducers: {
        
        toggleComplete: (store, action) => {

            const updatedItems = store.items.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        isComplete: !todo.isComplete
                    }                   
                } else {
                    return todo;

                }
            });
            store.items = updatedItems;
        }

}

});

export default todos;
