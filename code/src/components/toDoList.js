import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/todos';

export const ToDoLists = () => {
  const dispatch = useDispatch();

  // gets the tasks fron the store
  const taskList = useSelector((store) => store.tasks.items);

  // fuction to set checkbox as complete or not, from todo reducer
  const onIsCompletedToggle = (id) => {
    dispatch(tasks.actions.toggleTask(id));
  }

  // function to delete task, from todo reducer
  const onDeleteTaskBtnClick = (taskIndex) => {
    dispatch(tasks.actions.deleteTask(taskIndex));
  }

  // Returns the entire section maps all of the separate tasks
  const functionForMap = (task, taskIndex) => {
    return (
      <div>
        <section key={task.id}>
          <div>{task.name}</div>

          <input type="checkbox" checked={task.isCompleted} onChange={() => onIsCompletedToggle(task.id)} />

          <button className="ownStyle" onClick={() => onDeleteTaskBtnClick(taskIndex)} type="button">
          delete
          </button>
        </section>
      </div>

    );
  }
  return (
    <div>

      <section>
        {taskList.map((singleTask, index) => functionForMap(singleTask, index))}
      </section>

    </div>
  )
}