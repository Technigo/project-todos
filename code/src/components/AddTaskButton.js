import React, { useState } from 'react';

const AddTaskButton = () => {
  const [counter, setCounter] = useState(0);

  const handleCounterButtonClick = (shouldIncrese) => {
    if (shouldIncrese && counter < 10) {
      setCounter(counter + 1);
    } else if (!shouldIncrese && counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <form>
      <button type="button" onClick={() => handleCounterButtonClick(true)}>Add task</button>
      <button type="button" onClick={() => handleCounterButtonClick(false)}>Remove task</button>
      <p>Number of tasks{counter}</p>
    </form>
  )
}

export default AddTaskButton;