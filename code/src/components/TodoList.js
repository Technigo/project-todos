/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import { toWords } from 'number-to-words';
import { TodoItem } from './TodoItem';
import { AddTodo } from './AddTodo';
import { Wrapper, Button } from './GlobalStyle';

export const TodoList = () => {
  const dispatch = useDispatch();
  const allTasks = useSelector((store) => store.tasks.items);

  const onDone = (id) => {
    dispatch(tasks.actions.toggleItem(id));
  };

  const onDelete = (index) => {
    dispatch(tasks.actions.deleteItem(index));
  };

  const onCompleteAll = () => {
    allTasks.forEach((todo) => {
      if (!todo.isDone) {
        dispatch(tasks.actions.toggleItem(todo.id));
      }
    });
  };

  const onClearAll = () => {
    if (window.confirm('Are you sure you want to delete all tasks, including unfinished ones?')) {
      dispatch(tasks.actions.clearAll());
    }
  };

  const tasksTodo = allTasks.filter((todo) => !todo.isDone);
  const doneTasks = allTasks.filter((todo) => todo.isDone);

  return (
    <Wrapper>
      <h2>
        You have {toWords(tasksTodo.length)} {tasksTodo.length === 1 ? 'thing' : 'things'} to do
        today
      </h2>

      {tasksTodo.length === 0 && <p>You are all done! ⭐</p>}

      {tasksTodo.map((todo, index) => (
        <TodoItem todo={todo} index={index} key={todo.id} onDelete={onDelete} onDone={onDone} />
      ))}
      <AddTodo />
      <Button type="button" onClick={onCompleteAll}>
        Complete all
      </Button>
      <Button type="button" onClick={onClearAll}>
        Clear all
      </Button>
      <h2>
        You have finishied {toWords(doneTasks.length)} {doneTasks.length === 1 ? 'task' : 'tasks'}
      </h2>
      {doneTasks.map((todo, index) => (
        <TodoItem todo={todo} index={index} key={todo.id} onDelete={onDelete} onDone={onDone} />
      ))}
    </Wrapper>
  );
};
