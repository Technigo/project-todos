import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const initialState = {
    items: [
        { id: 1, text: "test task", isComplete: false },
        { id: 2, text: "test task two", isComplete: false },
    ],
};

const todos = createSlice({
    name: "todos",
    initialState,
    reducers: {
        createToDo: (store, action) => {
            const newToDo = {
                id: uniqid(),
                text: action.payload,
                isComplete: false,
            };

            store.items = [...store.items, newToDo];
        },
        toggleCompleted: (store, action) => {
            const updatedToDos = store.items.map((toDo) => {
                if (toDo.id === action.payload) {
                    const updated = {
                        ...toDo,
                        isComplete: !toDo.isComplete,
                    };
                    return updated;
                }
                return toDo;
            });
            store.items = updatedToDos;
        },
        deleteToDo: (store, action) => {
            const filteredToDos = store.items.filter(
                (toDo) => toDo.id !== action.payload
            );
            store.items = filteredToDos;
        },
    },
});

export default todos;
