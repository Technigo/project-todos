import React, { useState } from "react";
import { useDispatch } from "react-redux";

import todos from "reducers/todos";

const CreateToDo = () => {
    const [toDoText, setToDoText] = useState("");

    const dispatch = useDispatch();

    const onInputChange = (e) => {
        setToDoText(e.target.value);
    };

    const onCreateNew = () => {
        dispatch(todos.actions.createToDo(toDoText));
    };
    return (
        <div>
            <input
                type="text"
                value={toDoText}
                onChange={onInputChange}
                placeholder="new To Do item"
            ></input>
            <button onClick={onCreateNew} disabled={toDoText === ""}>
                Create new To-Do item
            </button>
        </div>
    );
};

export default CreateToDo;
