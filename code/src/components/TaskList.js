import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import tasks from '../reducers/task';
import { Content, TaskForm } from './TaskListStyling';
import { AddButton, DeleteButton, DeleteAllButton } from './Global';

// Define a component for individual task item
const TaskItem = ({ task, onToggle, onDeleteTask }) => (
  <li key={task.id}>
    <input
      type="checkbox"
      checked={task.isComplete}
      onChange={onToggle} />
    <span>{task.text}</span>
    <DeleteButton onClick={onDeleteTask}>
      Delete Task
      <FontAwesomeIcon icon={faTrash} />
    </DeleteButton>
  </li>
);

// Define a component for the whole task list
const TaskList = () => {
  // Define state variables using the useState hook
  const [input, setInput] = useState('');
  // Get the dispatch function from the useDispatch hook
  const dispatch = useDispatch();

  // Define a function for toggling task completion status
  const onToggle = (id) => {
    // Dispatch an action to the task reducer with the toggle payload
    dispatch(tasks.actions.toggle({ id }));
  };

  // Define a function for deleting a task
  const onDeleteTask = (id) => {
    // Dispatch an action to the task reducer with the delete payload
    dispatch(tasks.actions.delete({ id }));
  };

  // Define a function for adding a new task
  const onAddTask = () => {
    // Dispatch an action to the task reducer with the addTask payload
    dispatch(tasks.actions.addTask({ text: input }));
    // Reset the input field
    setInput('');
  };

  // Get the list of tasks from the Redux store using the useSelector hook
  const listWithTasks = useSelector((store) => store.tasks.items);

  // Define a function for deleting all tasks
  const onDeleteAll = () => {
    // Dispatch an action to the task reducer with the deleteAll payload
    dispatch(tasks.actions.deleteAll());
  };

  // Render the task list with inputs, buttons and individual task items
  return (
    <Content>
      <TaskForm onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add task" />
        <AddButton type="submit" onClick={onAddTask}>
          Add Task
        </AddButton>
      </TaskForm>

      <div className="container">
        <h2>You have {listWithTasks.length} tasks left for today.</h2>
        <ul>
          {listWithTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={() => onToggle(task.id)}
              onDeleteTask={() => onDeleteTask(task.id)} />
          ))}
        </ul>
      </div>
      <DeleteAllButton disabled={listWithTasks.length < 1} onClick={onDeleteAll}>
        Delete All
        <FontAwesomeIcon icon={faTrash} />
      </DeleteAllButton>
    </Content>
  );
};

export default TaskList;
