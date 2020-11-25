import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

// Components
import { Todo } from './Todo';
import { CompletedTodo } from './CompletedTodo';
import { CounterAndSorter } from './CounterAndSorter';
import { NoTasksFound } from './NoTasksFound';

// Reducers
import { todos } from '../reducers/todos';

// Styling
import { Wrapper, Button } from '../styling/GlobalStyling';

const ControlTasks = styled.div`
  margin: 20px;
  text-align: center;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    padding: 0 10px;
    text-transform: uppercase;
    font-size: 12px;
  }
`;

const CompletedHeadline = styled.h2`
  font-size: 16px;
  margin: 50px 0 15px 10px;
  text-transform: uppercase;
`;

// -----------------------------------------------------------------------------

export const ListOfTodos = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector((store) => store.todos.tasks);

  //Filtering by completed/not completed
  const nonCompletedTasks = allTodos.filter((todo) => !todo.isCompleted);
  const completedTasks = allTodos.filter((todo) => todo.isCompleted);

  // Set what category should be listed in the main list
  // Initial state = All incompleted tasks
  const [showingCategory, setShowingCategory] = useState('All');
  // Variable that is used for mapping over all tasks and display in list
  let categoryTasks = undefined;

  if (showingCategory === 'All') {
    categoryTasks = nonCompletedTasks;
  } else {
    categoryTasks = nonCompletedTasks.filter(
      (todo) => todo.category === showingCategory
    );
  }

  // Complete / remove functions
  const handleCompleteAll = () => {
    dispatch(todos.actions.completeAllTodos());
  };

  const handleRemoveAll = () => {
    dispatch(todos.actions.removeAllTodos());
  };

  return (
    <Wrapper>
      <CounterAndSorter
        showingCategory={showingCategory}
        setShowingCategory={setShowingCategory}
      />

      {nonCompletedTasks.length === 0 && <NoTasksFound />}

      {categoryTasks.reverse().map((task, index) => {
        return (
          <Todo task={task} index={index} key={task.id} prio={task.prio} />
        );
      })}

      {completedTasks.length !== 0 && (
        <CompletedHeadline>Completed tasks</CompletedHeadline>
      )}
      {completedTasks.map((task, index) => {
        return <CompletedTodo task={task} index={index} key={task.id} />;
      })}

      {nonCompletedTasks.length !== 0 && (
        <ControlTasks>
          <p>
            Complete all tasks <Button onClick={handleCompleteAll}>✓</Button>
          </p>
          <p>
            Remove all tasks <Button onClick={handleRemoveAll}>✕</Button>
          </p>
        </ControlTasks>
      )}
    </Wrapper>
  );
};
