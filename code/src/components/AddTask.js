import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
// import { AddButton } from 'styleComponent/StyledButton';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    /*
    - We need make obj  same structure as reducer items.
    - to create uniq id is Date.now()

    */
    const newTasks = {
      id: Date.now().toString(),
      name: inputValue,
      isCaught: false
    };

    // Dispatch the whole object
    dispatch(tasks.actions.addItem(newTasks));
    setInputValue('');
  };

  return (
    <div className="inputWrapper">
      <form onSubmit={onFormSubmit}>
        <label className="inputLabel">
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onFormSubmit()}
          />
          {/* <AddButton onClick={() => onFormSubmit()} disabled={task < 1}>
            +
          </AddButton> */}
          <button type="submit"> Add Task</button>

          {/* <button type="submit"> Add Task</button> */}
        </label>
      </form>
    </div>
  );
};

export default AddTask;
