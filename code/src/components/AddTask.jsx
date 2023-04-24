/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Tasks from 'reducers/Task';

const capitalize = (stringToCapitalized) => {
  return stringToCapitalized.charAt(0).toUpperCase() + stringToCapitalized.slice(1);
}
const AddTask = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      text: capitalize(inputValue),
      isComplete: false
    }
    dispatch(Tasks.actions.addTask(newTask));
    setInputValue('');
  }
  const onClickDeleteAllTasks = () => {
    dispatch(Tasks.actions.deleteAllTasks());
  }
  return (
    <section className="w-full mb-10">
      <form onSubmit={onFormSubmit}>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-3 md:mb-0">
            <h3 className="mb-3 font-bold text-xl">
              What are you up to today?
            </h3>
            <div className="flex items-center justify-between gap-4">
              <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 w-full">
                <label htmlFor="addTaskInput" className="block text-xs font-medium text-gray-900">
                ToDo
                </label>
                <input
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  id="addTaskInput"
                  type="text"
                  name="todo"
                  className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-transparent"
                  placeholder="Get some sun" />
              </div>
              <button type="submit" className="bg-green py-3 rounded-md text-white text-sm h-fit px-4 hover:shadow-md transition whitespace-nowrap">Add now</button>
            </div>
          </div>
          <button type="button" onClick={onClickDeleteAllTasks} className="bg-red py-3 rounded-md text-white text-sm h-fit px-4 hover:shadow-md transition">Delete all</button>
        </div>
      </form>
    </section>
  )
}

export default AddTask