/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/task';

const TaskList = () => {
  // Shows total number of tasks in the list
  const taskList = useSelector((backpack) => backpack.tasks.items);

  // Show number of completed tasks
  const completedTasks = taskList.filter((task) => task.isDone);

  const dispatch = useDispatch();

  const onIsDoneToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
  }
  const onDeleteTaskBtnClick = (taskIndex) => {
    dispatch(tasks.actions.deleteItem(taskIndex));
  }
  return (
    <section>
      {taskList.map((singleTask, index) => {
        return (
          <article className="taskListBox" key={singleTask.id}>
            <h2>{singleTask.name}</h2>
            <label className="Is this task done">
              <input type="checkbox" checked={singleTask.isDone} onChange={() => onIsDoneToggle(singleTask.id)} />
              <button onClick={() => onDeleteTaskBtnClick(index)} type="button">Remove task</button>
              <p>Completed tasks:{' '}
                <span style={{ fontWeight: 600 }}>{completedTasks.length} / {taskList.length}</span>
              </p>
            </label>
          </article>
        );
      })}
    </section>
  )
}

export default TaskList;