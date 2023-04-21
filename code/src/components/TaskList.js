import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import tasks from '../reducers/task';
import { StyledInput, Content, TaskForm, SecondHeadingLabel,
  ThirdHeading, UncompletedTasks } from './TaskListStyling';
import { AddButton, DeleteButton, DeleteAllButton,
  StyledIcon, StyledCheckbox, StyledCheckboxLabel,
  StyledTaskListItem, StyledTaskList } from './Global';

// Define a component for individual task item
const TaskItem = ({ task, onToggle, onDeleteTask }) => (
  <StyledTaskList key={task.id}>
    <StyledTaskListItem>
      <StyledCheckbox
        type="checkbox"
        id={`task-${task.id}`}
        checked={task.isComplete}
        onChange={() => onToggle(task.id)} />
      <StyledCheckboxLabel htmlFor={`task-${task.id}`}>{task.text}</StyledCheckboxLabel>
      <DeleteButton type="button" onClick={onDeleteTask} title="Delete" aria-label={`Delete task ${task.text}`} role="button">
        <StyledIcon icon={faTrash} />
      Delete
      </DeleteButton>
    </StyledTaskListItem>
  </StyledTaskList>
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
    dispatch(tasks.actions.deleteTask({ id }));
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

  // Get the number of uncompleted tasks
  const numUncompletedTasks = listWithTasks.filter((task) => !task.isComplete).length;

  // Define a function for deleting all tasks
  const onDeleteAll = () => {
    // Dispatch an action to the task reducer with the deleteAll payload
    dispatch(tasks.actions.deleteAll());
  };

  // Render the task list with inputs, buttons and individual task items
  return (
    <Content>
      <SecondHeadingLabel htmlFor="add-task">Add Task to Todo List</SecondHeadingLabel>
      <TaskForm onSubmit={(e) => e.preventDefault()}>
        <StyledInput
          id="add-task"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add task" />
        <AddButton type="submit" onClick={onAddTask}>
          Add Task
        </AddButton>
      </TaskForm>

      <>
        <ThirdHeading>
        Uncompleted Tasks: <UncompletedTasks>{numUncompletedTasks}</UncompletedTasks>
        </ThirdHeading>
        <StyledTaskList>
          {listWithTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={() => onToggle(task.id)}
              onDeleteTask={() => onDeleteTask(task.id)} />
          ))}
        </StyledTaskList>
      </>
      <DeleteAllButton type="button" disabled={listWithTasks.length < 1} onClick={onDeleteAll}>
        Delete All
        <StyledIcon icon={faTrash} />
      </DeleteAllButton>
    </Content>
  );
};

export default TaskList;