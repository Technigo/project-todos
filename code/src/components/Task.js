import React from 'react';
import { useDispatch } from 'react-redux';

export const Task = ({ task }) => {
  return (
    <form>
      <label>
        <input type="radio" name="task"></input>
        {task.title}
      </label>
    </form>
  );
};
