import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import { formatDistanceToNow } from 'date-fns';
import tasks from '../reducers/task';
import { Content, TaskForm, DeleteButton, DeleteAllButton } from './TaskListStyling';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch(tasks.actions.toggle({ id: task.id }));
  };

  const onDeleteTask = () => {
    dispatch(tasks.actions.delete({ id: task.id }));
  };

  return (
    <li key={task.id}>
      <input
        type="checkbox"
        checked={task.isComplete}
        onChange={onToggle} />
      <span>{task.text}</span>
      {/* <span>{formatDistanceToNow(new Date(task.timestamp), { addSuffix: true })}</span> */}
      <DeleteButton onClick={onDeleteTask}>Delete Task
        <FontAwesomeIcon icon={faTrash} />
      </DeleteButton>
    </li>
  );
};

export const TaskList = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const onAddTask = () => {
    dispatch(tasks.actions.addTask({ text: input }));
    setInput('');
  };

  const listWithTasks = useSelector((store) => store.tasks.items);

  const onDeleteAll = () => {
    dispatch(tasks.actions.deleteAll());
  };

  return (
    <Content>
      <TaskForm onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add task" />
        <button type="submit" onClick={onAddTask}>
          Add
        </button>
      </TaskForm>

      <div className="container">
        <h2>You have {listWithTasks.length} tasks left for today.</h2>
        <ul>
          {listWithTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      </div>
      <DeleteAllButton
        disabled={listWithTasks.length < 1}
        onClick={onDeleteAll}>
          Delete All
        <FontAwesomeIcon icon={faTrash} />
      </DeleteAllButton>
    </Content>
  );
};