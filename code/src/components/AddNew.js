/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';

const AddNew = () => {
  const inputRef = useRef(null);

  const [newTask, setUpdated] = useState('');

  const handleClick = () => {
    //  "inputRef.current.value" is input value
    setUpdated(inputRef.current.value);
  };

  return (
    <div>
      <h2>New Task: {newTask}</h2>
      <input
        ref={inputRef}
        type="text"
        id="message"
        name="message" />

      <button type="button" onClick={handleClick}>Add new Task</button>
    </div>
  );
}

export default AddNew;

