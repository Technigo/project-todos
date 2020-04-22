import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasks } from '../reducers/tasks'
import moment from 'moment';



/*tasks.actions.addTask({
  listId: listId,
  itemInfo: { text: inputValue, complete: false, category, dueDate }*/


export const TaskItem = ({ dueDate, category, startDate, itemIndex }) => {
  const item = useSelector((store) => store.tasks.list.items[itemIndex]);

  const dispatch = useDispatch();

  const onRemoveClicked = (e) => {
    dispatch(
      tasks.actions.removeTask({
        itemIndex,
      })
    )
  };

  const handleOnChange = (e) => {
    dispatch(
      tasks.actions.setDone({
        itemIndex: itemIndex,
        complete: !item.complete,
      })
    )
  };

  return (
    <div>
      <span>{category}: </span>
      <input
        type="checkbox"
        onChange={handleOnChange}
        className='task-item-check'
        checked={item.complete ? "checked" : ""}
      ></input>
      <span className="task-item-text">{item.text}</span>
      <button onClick={onRemoveClicked}>[Remove]</button>
      <span>ADDED: {moment(startDate).format('MMM Do YYYY')}</span>
      {dueDate && <span> -> DUE: {moment(dueDate).format('MMM Do YYYY')}</span>}
    </div>
  );
};  