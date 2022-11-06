/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasksWants from 'reducers/tasksWants';
import ListHeaderStyling from 'styling/ListHeaderStyling';
import ListStyling from 'styling/ListStyling'
import AddNewTask from './AddNewTask';
import RemoveTask from './RemoveTask';
import TaskCounterWantTos from './TaskCounterWantTos';

const TaskListWantTos = () => {
  const [inputValue, setInputValue] = useState(''); /* Needed for the AddNewTask to work */
  const taskItemWants = useSelector((store) => store.tasksWants.items);
  const dispatch = useDispatch();
  useEffect(() => {
    const listFromStorage = JSON.parse(localStorage.getItem('taskItemWants'));
    if (listFromStorage) {
      dispatch(tasksWants.actions.setAllItems(listFromStorage));
    }
  }, [])

  const onIsCompleteToggle = (id) => {
    dispatch(tasksWants.actions.toggleItem(id));
  }
  const onDeleteTaskItem = (taskIndex) => {
    dispatch(tasksWants.actions.removeItem(taskIndex));
  }
  const onFormSubmit = (event) => {
    event.preventDefault(); /* Have the store in the same state during one session. no releod */
    const newTask = { id: Date.now().toString(),
      text: inputValue,
      complete: false }
    dispatch(tasksWants.actions.addItem(newTask));
    setInputValue('');
    localStorage.setItem('taskItemWants', JSON.stringify(taskItemWants))
  };
  return (
    <section>
      <ListHeaderStyling>
        <div><h2>Want Tos</h2></div>
      </ListHeaderStyling>
      <ListStyling>
        {taskItemWants.map((singleTask, index) => {
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
        <TaskCounterWantTos />
        <AddNewTask onFormSubmit={onFormSubmit} inputValue={inputValue} setInputValue={setInputValue} />
      </ListStyling>

    </section>
  )
}

export default TaskListWantTos;

