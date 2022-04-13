import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import uniqid from "uniqid";

import todos from "reducers/todos";

const AddToDo = () => {
const [inputValue, setInputValue] = useState ("");

const dispatch = useDispatch();

const onFormSubmit = (event) => {
    event.preventDefault();

const newToDo = {
    id: uniqid(),
    text: inputValue,
    isComplete: false,
};

dispatch(todos.actions.addItem(newToDo));

setInputValue("");
};

return (
    <form onSubmit={onFormSubmit}>
<label>
    New task: &nbsp;
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

export default AddToDo;