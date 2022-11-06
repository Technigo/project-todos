/* eslint-disable linebreak-style */
import React from 'react';
import { useDispatch } from 'react-redux';
import task from 'reducers/task';

const TaskList = () => {
  const dispatch = useDispatch();

  /* useEffect(() => {
    const listFromStorage = JSON.parse(localStorage.getItem('TaskList'));
    if (listFromStorage) {
      dispatch(task.actions.setAllItems(listFromStorage));
    }
  }, [])
  const TaskList = useSelector((store) => store.tasks.items); */

  const onIsCaughtToggle = (id) => {
    dispatch(task.actions.toggleItem(id));
  }

  const onDeleteTaskButtonClick = (taskIndex) => {
    dispatch(task.actions.deleteItem(taskIndex));
  }

  return (
    <section>
      {TaskList.map((singleTask, index) => {
        return (
          <article key={singleTask.id}>
            <h2>{singleTask.name}</h2>
            <lable>Done with task?
              <input
                type="checkbox"
                checked={singleTask.isCaught}
                onChange={() => onIsCaughtToggle(singleTask.id)} />
            </lable>
            <button onClick={() => onDeleteTaskButtonClick(index)} type="button">🐯</button>
          </article>
        );
      })}
    </section>
  )
}

export default TaskList;