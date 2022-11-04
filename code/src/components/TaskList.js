/* eslint-disable linebreak-style */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

// This is where I fetch the tasks
const TaskList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const listfromStorage = JSON.parse(localStorage.getItem('allTasks'));
    if (listfromStorage) {
      dispatch(tasks.actions.setAllItems(listfromStorage));
      console.log(listfromStorage)
      console.log(tasks)
    }
  }, [])
  const allTasks = useSelector((store) => store.tasks.items);

  const onIsTaskCompleted = (id) => {
    dispatch(tasks.actions.toggleItem(id));
    console.log(id)
  }
  const onDeleteTaskBtnClick = (taskIndex) => {
    dispatch(tasks.actions.deleteItem(taskIndex));
  }
  const functionForMap = (arg1, arg2) => {
    console.log(arg1)
    console.log(arg2)
    return (
      <article key={arg1.id}>
        <h2>{arg1.text}</h2>
        <label>
          <input
            type="checkbox"
            checked={arg1.taskDone}
            onChange={() => onIsTaskCompleted(arg1.id)} />
        </label>
        <button
          onClick={() => onDeleteTaskBtnClick(arg2)}
          type="button">❤️
        </button>
      </article>
    );
  }
  return (
    <section>
      {allTasks.map((task, index) => functionForMap(task, index))}
    </section>
  )
}
export default TaskList;
