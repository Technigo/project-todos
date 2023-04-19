/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';

const ItemList = ({ text }) => {
  const dispatch = useDispatch();

  const deleteTaskHandler = () => {};
  return (
    <div className="list-item">
      <input type="radio" />
      <p>{text}</p>
      <button onClick={deleteTaskHandler()} type="button">
        To remove
      </button>
    </div>
  );
};

export default ItemList;
