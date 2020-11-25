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
      {/* Display a selector to choose to sort by category + count completed tasks */}
      <CounterAndSorter
        showingCategory={showingCategory}
        setShowingCategory={setShowingCategory}
      />

      {/* If there are no tasks, display NoTasksFound-component */}
      {nonCompletedTasks.length === 0 && <NoTasksFound />}

      {/* Display all tasks based on category, filtered on prio/not prio. */}
      {/* Prio */}
      {categoryTasks
        .reverse()
        .filter((task) => task.prio)
        .map((task, index) => {
          return (
            <Todo task={task} index={index} key={task.id} prio={task.prio} />
          );
        })}
      {/* Not prio */}
      {categoryTasks
        .filter((task) => !task.prio)
        .map((task, index) => {
          return (
            <Todo task={task} index={index} key={task.id} prio={task.prio} />
          );
        })}

      {/* Display headline if there are completed tasks */}
      {completedTasks.length !== 0 && (
        <CompletedHeadline>Completed tasks</CompletedHeadline>
      )}

      {/* List all completed tasks */}
      {completedTasks.map((task, index) => {
        return <CompletedTodo task={task} index={index} key={task.id} />;
      })}

      {/* Show complete all/remove all only if there are thoughts available */}
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

// Local styles -----------------------------
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
