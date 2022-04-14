import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { listSlice } from "reducers/listSlice";

const AddTask = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(listSlice.actions.addTask(inputValue));
        setInputValue("");
      }}
    >
      <input
        type="text"
        name="new task"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        placeholder="To do..."
      />
      <label htmlFor="new task" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddTask;
