/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/task';

const TaskList = () => {
  const taskList = useSelector((backpack) => backpack.tasks.items);

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
              <input type="radio" checked={singleTask.isDone} onChange={() => onIsDoneToggle(singleTask.id)} />
              <button onClick={() => onDeleteTaskBtnClick(index)} type="button">Remove task</button>
            </label>
          </article>
        //                 style="float: left"
        //              => style={{float: 'left'}}
        //                 style={{ visibility: 'hidden' }}
        );
      })}
    </section>
  )
}

export default TaskList;