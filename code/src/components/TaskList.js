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
  const functionForMap = (todo, broom) => {
    console.log(todo)
    console.log(broom)
    return (

      <section className="tasklist-container" key={todo.id}>
        <div className="checkbox-container">
          <p>{todo.text}</p>
          <label className="button-container">
            <input
              type="checkbox"
              id="task"
              checked={todo.taskDone}
              onChange={() => onIsTaskCompleted(todo.id)} />
            <span className="checkmark" />
          </label>
        </div>
        <div className="delete-container">
          <button
            className="broom-btn"
            onClick={() => onDeleteTaskBtnClick(broom)}
            type="button">🧹
          </button>
        </div>

      </section>

    );
  }
  return (
    <section>
      {allTasks.map((task, index) => functionForMap(task, index))}
    </section>
  )
}
export default TaskList;
