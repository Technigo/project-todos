import React from "react";
import { useDispatch } from "react-redux";

import tasks from "../reducers/tasks";

const Footer = () => {
  const dispatch = useDispatch();

  const onRemoveTasks = () => {
    dispatch(tasks.actions.removeTasks());
  };

  return (
    <button className='clear-button' type='button' onClick={onRemoveTasks}>
      Clear All
    </button>
  );
};

export default Footer;
