/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';

const ToDoList = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch()

  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('taskList'));
    if (tasksFromLocalStorage) {
      dispatch(tasks.actions.setupStore(tasksFromLocalStorage))
    }
  }, [dispatch])

  const onDeleteTaskBtnClick = (id) => {
    dispatch(tasks.actions.removeTask(id))
  }

  const onCheckTaskToggleBtnClick = (id) => {
    dispatch(tasks.actions.toggleComplete(id))
  }

  return (
    <ul>
      {taskList.map((singleTask) => {
        return (
          <>
            <div className="task-row">
              <div className="task-item">
                {/* <input type="checkbox" id={singleTask.id} name="todo" onChange={() => dispatch(tasks.actions.toggleComplete(singleTask))} /> */}
                {/* The input id has to be the same as the label htmlFor */}
                <input type="checkbox" id={`task_with_id_${singleTask.id}`} name="todo" onChange={() => onCheckTaskToggleBtnClick(singleTask.id)} />
                <label className="todo-text" htmlFor={`task_with_id_${singleTask.id}`}>{singleTask.description}</label>
              </div>
              <div>
                {/* <button className="delete-button" type="button" onClick={() => dispatch(tasks.actions.removeTask(singleTask))}>x</button> */}
                <button className="delete-single-task-button" type="button" onClick={() => onDeleteTaskBtnClick(singleTask)}>x</button>
              </div>
            </div>
            <hr />
          </>
        )
      })}
      <p className="invisible-text">Invisible</p>
      <hr />
      <p className="invisible-text">Invisible</p>
      <hr />
      <p className="invisible-text">Invisible</p>
      <hr />
      <p className="invisible-text">Invisible</p>
      <hr />
      <p className="invisible-text">Invisible</p>
      <hr />
    </ul>
  )
}

export default ToDoList;