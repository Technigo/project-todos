import React from "react";
import { useDispatch } from "react-redux";

import tasks from "../reducers/tasks";

const Footer = () => {
  const dispatch = useDispatch();

  const onRemoveTasks = () => {
    dispatch(tasks.actions.removeTasks());
  };

  return (
    <div className='footer'>
      <button className='clear-button' type='button' onClick={onRemoveTasks}>
        Clear All
      </button>
    </div>
  );
};

export default Footer;
