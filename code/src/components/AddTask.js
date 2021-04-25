import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";

import tasks from "../reducers/tasks";

const AddTask = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: uniqid(),
      description: value,
    };

    dispatch(tasks.actions.addTask(newTask));
    setValue("");
  };

  return (
    <form className='form-container' onSubmit={onFormSubmit}>
      <input
        className='input-box'
        type='text'
        placeholder='Add a task...'
        value={value}
        onChange={(event) => setValue(event.target.value)}
        required
      />
      <button className='submit-button' type='submit'>
        {" "}
        +{" "}
      </button>
    </form>
  );
};

export default AddTask;
