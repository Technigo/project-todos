import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: {
        name: "List",
        items: [],
    }
};

export const Tasks = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        /*
        1st reducer addTask adds a new task to the items array in the initial state.     
        This will be an object with the following: 
        id - randomized number between 1-40.
        text - The task
        done - A boolean value for if the task is completed or not. This will be false until the user clicks on the checkbox which will trigger the setDone reducer. 
        1. Creating a new object, newItem, which will be sent into the list array in the initial state. 
        2. Using Math.random to generate a random number between 1-40. Using the spread operator we're taking whatever is in the items array and seperating these items. We then map through them individually to create a new array of the results and pass in an item id, which is incremented by one it each time we generate a new task.
        3. Text is what we're getting from the action and payload being sent from the newTask in TaskInput.js.
        4. Done is set to false
        5. Then we pass into newItemList an array and we spread out each item from the items array and add the newItem (task) that the user is submitting when pressing add button.
        6.Then we're setting the items array in intital state to the variable newItemsList, which is the new array. 
        */
        addTask: (state, action) => {
            const newItem = {
                id: Math.max(...state.list.items.map(item => item.id)) +1,
                text: action.payload,
                done: false,
            };
            console.log(newItem);
            const newItemList = [...state.list.items, newItem];      
            state.list.items = newItemList;
        },
        /*2. 2nd reducer setDone takes the index number of the task the user has checked as done via the payload and set's it to done by accessing the object property done */ 
        setDone: (state, action) => {
            const { itemIndex, done } = action.payload;
            state.list.items[itemIndex].done = done;
        },
        /* 3rd Reducer: RemoveTask removes the specific task the user has clicked on to remove. The id of that specific task is dispatched into the removeTask reducer using the payload. Filter is used to filter the tasks tht should be shown as they don't match the id of the task that has been clicked on to be removed. The items array is then set to this new filtered array . */     
        removeTask: (state, action) => {
            const itemId = action.payload;
            const filteredList = state.list.items.filter(
                item => item.id !== itemId
            );
            state.list.items = filteredList;
        }
    },
});

