import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    list: {
        items: [
            {
                description: "This is a test todo",
                done: false,
                created: new Date(Date.now()),
                calendar: false,
                dueDate: null,
            }
        ],
        categories: [
            {
                name: "Work",
                reveal: false,
                items: []
            },
            {
                name: "Study",
                reveal: false,
                items: []
            },
            {
                name: "Social",
                reveal: false,
                items: []
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
            // state.list.items.push(itemInfo);
            const foundCategory = state.list.categories.find(x => x.name === itemInfo.category);
            foundCategory.items.unshift(itemInfo)
        },

        addCategory: (state, action) => {
            const { itemInfo } = action.payload;
            // state.list.items.push(itemInfo);
            state.list.categories.push(itemInfo);

        },

        addTodoToCategory: (state, action) => {
            const { itemInfo } = action.payload;
            const foundCategory = state.list.categories.name === itemInfo.category;
            foundCategory.items.push(itemInfo)
        },

        removeTodo: (state, action) => {
            const { itemIndex, category } = action.payload;
            const foundCategory = state.list.categories.find(x => x.name === category)
            foundCategory.items = foundCategory.items.filter(
                (item, index) => index !== itemIndex
            );
            if (foundCategory.items.length === 0) {
                foundCategory.reveal = false;
            }
        },

        removeCategory: (state, action) => {
            const { itemIndex } = action.payload;
            state.list.categories = state.list.categories.filter(
                (item, index) => index !== itemIndex
            );
        },

        toggleDone: (state, action) => {
            const { itemIndex, done, category } = action.payload;
            // state.list.items[itemIndex].done = done;
            const foundCategory = state.list.categories.find(x => x.name === category)
            foundCategory.items[itemIndex].done = done;
            foundCategory.items.push(foundCategory.items.splice(itemIndex, 1)[0])
        },

        toggleCalendar: (state, action) => {
            const { itemIndex, calendar, category } = action.payload;
            // state.list.items[itemIndex].calendar = calendar
            const foundCategory = state.list.categories.find(x => x.name === category)
            foundCategory.items[itemIndex].calendar = calendar
        },

        setDueDate: (state, action) => {
            const { itemIndex, dueDate, calendar, category } = action.payload;
            // state.list.items[itemIndex].dueDate = dueDate
            // state.list.items[itemIndex].calendar = calendar
            const foundCategory = state.list.categories.find(x => x.name === category)
            foundCategory.items[itemIndex].dueDate = dueDate;
            foundCategory.items[itemIndex].calendar = calendar
        },

        clearAll: (state) => {
            state.list.categories.map((item) => {
                item.items = []
            })
        },

        revealItem: (state, action) => {
            const { itemIndex, reveal } = action.payload;
            state.list.categories[itemIndex].reveal = reveal

        },

        sortFolder: (state, action) => {
            const { itemIndex, sortOrder } = action.payload;
            state.list.categories[itemIndex].items = sortOrder
        },

        clearFolder: (state, action) => {
            const { itemIndex } = action.payload;
            state.list.categories[itemIndex].items = []
        }
    }
});