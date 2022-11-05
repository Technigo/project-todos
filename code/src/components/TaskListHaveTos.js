/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import ListHeaderStyling from 'styling/ListHeaderStyling';
import ListStyling from 'styling/ListStyling'
import AddNewTask from './AddNewTask.js';
import RemoveTask from './RemoveTask.js';
import TasksCounter from './TaskCounter.js';

const TaskListHaveTos = () => {
  const dispatch = useDispatch();
  const taskItem = useSelector((store) => store.tasks.items);
  useEffect(() => {
    const listFromStorage = JSON.parse(localStorage.getItem('taskItem'));
    if (listFromStorage) {
      dispatch(tasks.actions.setAllItems(listFromStorage));
    }
  }, [])

  const [inputValue, setInputValue] = useState('');

  const onIsCompleteToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
  }
  const onDeleteTaskItem = (taskIndex) => {
    dispatch(tasks.actions.removeItem(taskIndex));
  }

  const onFormSubmit = (event) => {
    event.preventDefault(); /* Have the store in the same state during one session. no releod */
    const newTask = { id: Date.now().toString(),
      text: inputValue,
      complete: false }
    dispatch(tasks.actions.addItem(newTask));
    setInputValue('');
    localStorage.setItem('taskItem', JSON.stringify(taskItem))
  }

  return (
    <section>
      <ListHeaderStyling>
        <div><h2>Must Dos</h2></div>
      </ListHeaderStyling>
      <ListStyling>
        {taskItem.map((singleTask, index) => {
          return (
            <article key={singleTask.id}>
              <h2>
                {singleTask.text}
              </h2>
              <label>
           Done?
                <input type="checkbox" checked={singleTask.complete} onChange={() => onIsCompleteToggle(singleTask.id)} />
              </label>
              <RemoveTask onDeleteTaskItem={onDeleteTaskItem} index={index} />
            </article>
          )
        })}
        <TasksCounter />
        <AddNewTask onFormSubmit={onFormSubmit} inputValue={inputValue} setInputValue={setInputValue} />
      </ListStyling>

    </section>
  )
}

export default TaskListHaveTos;

