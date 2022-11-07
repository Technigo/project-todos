/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasksWonts from 'reducers/tasksWonts';
import ListHeaderStyling from 'styling/ListHeaderStyling';
import ListStyling from 'styling/ListStyling'
import AddNewTask from './AddNewTask';
import TaskCounterWontDos from './TaskCounterWontDos';
import RemoveTask from './RemoveTask';

const TaskListWontDos = () => {
  const [inputValue, setInputValue] = useState(''); /* Needed for the AddNewTask to work */
  const taskItemWonts = useSelector((store) => store.tasksWonts.items);
  const dispatch = useDispatch();
  useEffect(() => {
    const listFromStorage = JSON.parse(localStorage.getItem('taskItemWonts'));
    if (listFromStorage) {
      dispatch(tasksWonts.actions.setAllItems(listFromStorage));
    }
  }, [])

  const onIsCompleteToggle = (id) => {
    dispatch(tasksWonts.actions.toggleItem(id));
  }
  const onDeleteTaskItem = (taskIndex) => {
    dispatch(tasksWonts.actions.removeItem(taskIndex));
  }
  const onFormSubmit = (event) => {
    event.preventDefault(); /* Have the store in the same state during one session. no releod */
    const newTask = { id: Date.now().toString(),
      text: inputValue,
      complete: false }
    dispatch(tasksWonts.actions.addItem(newTask));
    setInputValue('');
  }
  useEffect(() => {
    localStorage.setItem('taskItemWonts', JSON.stringify(taskItemWonts))
  }, [taskItemWonts])
  return (
    <section>
      <ListHeaderStyling>
        <div><h2>Won&lsquo;t Dos</h2></div>
      </ListHeaderStyling>
      <ListStyling>
        {taskItemWonts.map((singleTask, index) => {
          return (
            <article key={singleTask.id}>
              <h2>
                {singleTask.text}
              </h2>
              <label>
                <input type="checkbox" checked={singleTask.complete} onChange={() => onIsCompleteToggle(singleTask.id)} />
              </label>
              <RemoveTask onDeleteTaskItem={onDeleteTaskItem} index={index} />
            </article>
          )
        })}
        <TaskCounterWontDos />
        <AddNewTask onFormSubmit={onFormSubmit} inputValue={inputValue} setInputValue={setInputValue} />
      </ListStyling>

    </section>
  )
}

export default TaskListWontDos;

