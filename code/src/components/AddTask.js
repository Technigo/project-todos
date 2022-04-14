import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";

import { listSlice } from "reducers/listSlice";

const AddTask = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      listSlice.actions.addTask({
        id: uniqid(),
        description: inputValue,
        isDone: false,
      })
    );
    setInputValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
				id="new task"
        name="new task"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        placeholder="To do..."
      />
      <label htmlFor="new task" />
      <button type="submit" disabled={inputValue.length === 0}>
        +
      </button>
    </form>
  );
};

export default AddTask;
