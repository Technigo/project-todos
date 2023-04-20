import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uniqid from 'uniqid';
import { tasksproject } from 'reducers/tasksproject'
import { ProjectToDoList } from './ProjectToDoList';

export const NewProjectToDo = ({ listIndex }) => {
  const [newListItem, setNewListItem] = useState('');
  const allProjectTasks = useSelector((state) => state.tasksproject.projectArray);
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!newListItem) return
    const newToDo = {
      id: uniqid(),
      text: newListItem.charAt(0).toUpperCase() + newListItem.slice(1),
      complete: false
    };
    console.log('projectIndex:', listIndex);
    console.log('newToDo:', newToDo);
    dispatch(tasksproject.actions.addItem({ listIndex, item: newToDo }));
    setNewListItem('');
  }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newtask">
          <input
            type="text"
            name="newtask"
            value={newListItem}
            onChange={(e) => setNewListItem(e.target.value)} />
        </label>
        <button
          type="submit">
          add task
        </button>
      </form>
      {allProjectTasks.length > 0 && (
        <ProjectToDoList />
      )}
    </>
  )
}