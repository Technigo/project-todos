/*eslint-disable*/
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tasks from 'reducers/task';

const TaskList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('taskList'))
    if (tasksFromLocalStorage) {
      dispatch(tasks.actions.setUpStore(tasksFromLocalStorage))
    }
  }, [])

  const taskList = useSelector((store) => store.tasks.items)
  
  const onDeleteSingleTaskBtnClick = (id) => {
    dispatch(tasks.actions.deleteSingleTask(id));
  }
  const onIsDoneCheckboxToggle = (id) => {
    dispatch(tasks.actions.toggleIfTaskIsDone(id));
  }
  return (
    <section>
      <ul>
        {taskList.map((singleTask) => {
          return (
            <li key={singleTask.id}>
              <p>
                <span>{singleTask.name}</span>
                <button
                  type="button"
                  onClick={() => onDeleteSingleTaskBtnClick (singleTask.id)}>
                    Remove task
                </button>
                <label htmlFor={`task_with_id${singleTask.id}`}>
                    Task completed
                  <input id={`task_with_id${singleTask.id}`} type="checkbox" value={singleTask.isDone} onChange={() =>
                    onIsDoneCheckboxToggle(singleTask.id)} /></label>
              </p>
            </li>)
        })}
      </ul>
    </section>
  )
}

export default TaskList;