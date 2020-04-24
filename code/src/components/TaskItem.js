import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasks } from '../reducers/tasks'
import moment from 'moment';
import { CustomCheckbox } from './CustomCheckbox';

export const TaskItem = ({ item }) => {

  const dispatch = useDispatch();

  const onRemoveClicked = (e) => {
    dispatch(
      tasks.actions.removeTask(item.id))
  }

  const handleOnChange = (e) => {
    dispatch(
      tasks.actions.setDone(item.id))
  }

  return (
    <section className="taskItem">
      <div className="taskSection">
        <span className="category">{item.category}</span>
        <span className="task-item-text">{item.text}</span>
      </div>
      <CustomCheckbox
        isChecked={item.complete ? "checked" : ""}
        onChangeHandler={handleOnChange}
      />
      <div className="dateSection">ADDED:
        <span className="datePicker"> {moment(item.startDate).format('MMM Do YYYY')}</span>
        DUE: {item.dueDate && <span className="datePicker"> {moment(item.dueDate).format('MMM Do YYYY')}</span>}
      </div> <button className="deleteButton" onClick={onRemoveClicked}>X</button>
    </section >
  );
};  