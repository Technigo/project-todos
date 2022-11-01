import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toDoList from 'reducers/todo';

const ToDoList = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  const onTaskDoneToggle = (id) => {
    dispatch(toDoList.actions.toggleDone(id))
  };

  return (
    <section>
      {taskList.map((singleTask) => {
        return (
          <article>
            <h2>{singleTask.name}</h2>
            <label htmlFor="task">Is this task done?
              <input
                id="task"
                type="checkbox"
                checked={singleTask.done}
                onChange={() => onTaskDoneToggle(singleTask.id)} />
            </label>
          </article>
        )
      })}
    </section>
  )
};

export default ToDoList;