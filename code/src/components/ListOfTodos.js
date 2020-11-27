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
import { Wrapper, InnerFlexWrapper, Button } from '../styling/GlobalStyling';

// -----------------------------------------------------------------------------

export const ListOfTodos = ({ setAddTaskVisible }) => {
  const dispatch = useDispatch();
  const allTodos = useSelector((store) => store.todos.tasks);

  //Filtering by completed/not completed
  const nonCompletedTasks = allTodos.filter((todo) => !todo.isCompleted);
  const completedTasks = allTodos.filter((todo) => todo.isCompleted);

  // Set what category should be listed in the main list
  // Initial state = All incompleted tasks
  const [showingCategory, setShowingCategory] = useState('All');
  // Variable that is used for mapping over all tasks and display in list
  let categoryTasks = nonCompletedTasks;

  // Had to create an if statement to display all tasks, and
  // to be able to sort on prioritized tasks
  if (showingCategory === 'All') {
    categoryTasks = nonCompletedTasks;
  } else if (showingCategory === 'Prioritized') {
    categoryTasks = nonCompletedTasks.filter((task) => task.prio);
  } else {
    categoryTasks = nonCompletedTasks.filter(
      (todo) => todo.category === showingCategory
    );
  }

  // Complete all/remove all functions
  const handleCompleteAll = () => {
    dispatch(todos.actions.completeAllTodos());
  };
  const handleRemoveAll = () => {
    dispatch(todos.actions.removeAllTodos());
  };
  const handleRemoveCompleted = () => {
    dispatch(todos.actions.removeAllCompletedTodos());
  };

  return (
    <Wrapper>
      {/* Display a selector to choose to sort by category + count completed tasks */}
      <CounterAndSorter
        showingCategory={showingCategory}
        setShowingCategory={setShowingCategory}
      />

      {/* If there are no tasks, display NoTasksFound-component */}
      {nonCompletedTasks.length === 0 && (
        <NoTasksFound setAddTaskVisible={setAddTaskVisible} />
      )}

      {/* List all completed tasks based on category, filtered on prio/not prio. */}
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

      {/* Display headline - if there are completed tasks */}
      {completedTasks.length !== 0 && (
        <CompletedHeadline>Completed tasks</CompletedHeadline>
      )}

      {/* List all completed tasks */}
      {completedTasks.map((task, index) => {
        return <CompletedTodo task={task} index={index} key={task.id} />;
      })}

      {/* Show complete all/remove all only if there are thoughts available */}
      {allTodos.length !== 0 && (
        <ControlTasksWrapper>
          <ControllerWrapper>
            <p>Complete all tasks</p>
            <Button onClick={handleCompleteAll}>✓</Button>
          </ControllerWrapper>

          <ControllerWrapper>
            <p>Remove all tasks</p>
            <Button onClick={handleRemoveAll}>✕</Button>
          </ControllerWrapper>

          <ControllerWrapper>
            <p>Remove all completed tasks</p>
            <Button onClick={handleRemoveCompleted}>✕</Button>
          </ControllerWrapper>
        </ControlTasksWrapper>
      )}
    </Wrapper>
  );
};

// Local styles -----------------------------
const CompletedHeadline = styled.h2`
  font-size: 16px;
  margin: 50px 20px 15px 20px;
  text-transform: uppercase;
`;

const ControlTasksWrapper = styled.div`
  margin: 50px 20px 20px;
  text-align: center;
  font-size: 14px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  & p {
    padding: 0 10px;
    text-transform: uppercase;
    font-size: 12px;
  }

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const ControllerWrapper = styled(InnerFlexWrapper)`
  flex-direction: column;
  width: 33%;

  @media (max-width: 450px) {
    width: 100%;
    flex-direction: row;
  }
`;
