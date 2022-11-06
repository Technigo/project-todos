/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import task from 'reducers/task';

const TaskList = () => {
  const dispatch = useDispatch();

  /* useEffect(() => {
    const listFromStorage = JSON.parse(localStorage.getItem('TaskList'));
    if (listFromStorage) {
      dispatch(task.actions.setAllItems(listFromStorage));
    }
  }, []) */

  const taskList = useSelector((store) => store.tasks.items);

  const onIsDoneToggle = (id) => {
    dispatch(task.actions.toggleItem(id));
  }

  const onDeleteTaskButtonClick = (taskIndex) => {
    dispatch(task.actions.deleteItem(taskIndex));
  }

  return (
    <section>
      {taskList.map((singleTask, index) => {
        return (
          <article key={singleTask.id}>
            <h2>{singleTask.name}</h2>
            <lable>Done with task?
              <input
                type="checkbox"
                checked={singleTask.isDone}
                onChange={() => onIsDoneToggle(singleTask.id)} />
            </lable>
            <button onClick={() => onDeleteTaskButtonClick(index)} type="button">🗑️</button>
          </article>
        );
      })}
    </section>
  )
}

export default TaskList;