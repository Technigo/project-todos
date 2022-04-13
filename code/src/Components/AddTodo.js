import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import uniqid from "uniqid";

import todo from "reducers/todo";

const AddTodo = () => {
    const [inputValue, setInputValue] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTodo = {
            id: uniqid(),
            name: inputValue,
            done: false,
        }

        dispatch(todo.actions.addItem(newTodo));

        setInputValue("");

    };

    return (
         <form onSubmit={onFormSubmit}>
            <label>
                Add to do! &nbsp;
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>

    );
};

export default AddTodo;