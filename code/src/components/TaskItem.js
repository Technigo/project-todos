import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasks } from '../reducers/tasks'
import moment from 'moment';
import { CustomCheckbox } from './CustomCheckbox';

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
    <section className="taskItem">
      <div className="taskSection">
        <span className="category" >{item.category} </span>
        <span className="task-item-text">{item.text}</span>
      </div>
      <CustomCheckbox
        isChecked={item.complete ? "checked" : ""}
        onChangeHandler={handleOnChange}
      />
      {/*  <input
        type="checkbox"
        onChange={handleOnChange}
        className='task-item-check'
        checked={item.complete ? "checked" : ""}
      ></input>*/}
      <div className="dateSection">ADDED:
        <span className="datePicker"> {moment(startDate).format('MMM Do YYYY')}</span>
        DUE: {item.dueDate && <span className="datePicker"> {moment(item.dueDate).format('MMM Do YYYY')}</span>}
      </div> <button className="deleteButton" onClick={onRemoveClicked}>X</button>
    </section >
  );
};  