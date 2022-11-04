/* eslint-disable jsx-a11y/label-has-associated-control */
import React /* { useEffect } */ from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/todos';

const TaskList = () => {
  const dispatch = useDispatch();

  // gets the tasks fron the store
  const taskList = useSelector((store) => store.tasks.items);

  const onIsCompletedToggle = (id) => {
    dispatch(tasks.actions.toggleTask(id));
  }
  const onDeleteTaskBtnClick = (taskIndex) => {
    dispatch(tasks.actions.deleteTask(taskIndex));
  }
  const functionForMap = (task, arg2) => {
    return (
      <article key={task.id}>
        <h2>{task.name}</h2>
        <label>Is this pokemon caught
          <input type="checkbox" checked={task.isCompleted} onChange={() => onIsCompletedToggle(task.id)} />
        </label>
        <button onClick={() => onDeleteTaskBtnClick(arg2)} type="button">X</button>
      </article>
    );
  }
  return (
    <section>
      {taskList.map((singleTask, index) => functionForMap(singleTask, index))}
    </section>
  )
}

export default TaskList;