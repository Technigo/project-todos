import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks';

export const TaskInput = ({ listId }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleOnSubmit = e => {
    e.preventDefault();

    dispatch(
      tasks.actions.addTask({
        listId: listId,
        itemInfo: { text: inputValue, complete: false }
      })
    );

    setInputValue("");
  };

  return (
    <form className="task-input" onSubmit={handleOnSubmit}>
      <input
        type="text"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        className="task-input-text">
      </input>
      <input
        type="submit"
        className="task-input-button"
        value="Add Task">
      </input>
    </form>
  );
};