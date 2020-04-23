import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasks } from '../reducers/tasks'
import moment from 'moment';



/*tasks.actions.addTask({
  listId: listId,
  itemInfo: { text: inputValue, complete: false, category, dueDate }*/


export const TaskItem = ({ startDate, itemIndex }) => {
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
    <div className="taskItem">
      <input
        type="checkbox"
        onChange={handleOnChange}
        className='task-item-check'
        checked={item.complete ? "checked" : ""}
      ></input>
      <span className="category" >{item.category}: </span>
      <span className="task-item-text">{item.text}</span>
      <span className="dates">Added: {moment(startDate).format('MMM Do YYYY')}</span>
      {item.dueDate && <span> -> Due: {moment(item.dueDate).format('MMM Do YYYY')}</span>}
      <button onClick={onRemoveClicked}>X</button>
    </div>
  );
};  