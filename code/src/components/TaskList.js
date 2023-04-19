import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const TaskList = ({ inputValue }) => {
  const [isChecked, setIsChecked] = useState(false);
  const todoList = useSelector((store) => store.todolist.items);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <section>
      {todoList.map((singletask) => {
        return (
          <div>
            <input
              type="checkbox"
              id={singletask.id}
              value={inputValue}
              checked={isChecked}
              onChange={handleOnChange} />
            {singletask.name}
          </div>
        )
      })}
    </section>
  )
}

export default TaskList;