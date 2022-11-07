/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasksShoulds from 'reducers/tasksShoulds';
import ListHeaderStyling from 'styling/ListHeaderStyling';
import ListStyling from 'styling/ListStyling'
import AddNewTask from './AddNewTask';
import TaskCounterShouldDos from './TaskCounterShouldDos';
import RemoveTask from './RemoveTask';

const TaskListShouldDos = () => {
  const [inputValue, setInputValue] = useState('');
  const taskItemShoulds = useSelector((store) => store.tasksShoulds.items);
  const dispatch = useDispatch();
  useEffect(() => {
    const listFromStorage = JSON.parse(localStorage.getItem('taskItemShoulds'));
    if (listFromStorage) {
      dispatch(tasksShoulds.actions.setAllItems(listFromStorage));
    }
  }, [])

  const onIsCompleteToggle = (id) => {
    dispatch(tasksShoulds.actions.toggleItem(id));
  }
  const onDeleteTaskItem = (taskIndex) => {
    dispatch(tasksShoulds.actions.removeItem(taskIndex));
  }
  const onFormSubmit = (event) => {
    event.preventDefault(); /* Have the store in the same state during one session. no releod */
    const newTask = { id: Date.now().toString(),
      text: inputValue,
      complete: false }
    dispatch(tasksShoulds.actions.addItem(newTask));
    setInputValue('');
  }
  useEffect(() => {
    localStorage.setItem('taskItemShoulds', JSON.stringify(taskItemShoulds))
  }, [taskItemShoulds])
  return (
    <section>
      <ListHeaderStyling>
        <div><h2>Should Dos</h2></div>
      </ListHeaderStyling>
      <ListStyling>
        {taskItemShoulds.map((singleTask, index) => {
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
        <TaskCounterShouldDos />
        <AddNewTask onFormSubmit={onFormSubmit} inputValue={inputValue} setInputValue={setInputValue} />
      </ListStyling>

    </section>
  )
}

export default TaskListShouldDos;

