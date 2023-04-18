/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useSelector } from 'react-redux';

export const AddTasks = () => {
  const listItems = useSelector((store) => store.addTasks.tasks)
  // TODO - fetch tasks from the store

  return (
    <section>
      <form>
        <label htmlFor="label"> Add your todo here
          <input id="addtodotask" type="text" />
        </label>
      </form>
      <button type="button" onClick={() => setNewTask(true)} />
    </section>
  )
}