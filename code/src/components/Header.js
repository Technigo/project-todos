import React from 'react'
import moment from 'moment'
import { useSelector } from "react-redux";

export const Header = () => {
  const list = useSelector((store) => store.todos.list);
  const doneList = list.items.filter((item) => item.done);

  return (
    <div className="header-container">
      <div className="header-info">
        <h2>Todo</h2>
        <span>{moment().format('dddd MMMM Do')}</span> 
      </div>
    
      <div className="todo-summary">
        <h2>{doneList.length}/{list.items.length}</h2>
      </div>
    </div>
  );
};