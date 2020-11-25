import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Todo } from './Todo';
import { CompletedTodo } from './CompletedTodo';
import styled from 'styled-components';

// Reducers
import { todos } from '../reducers/todos';

// Styling
import { MainWrapper, Button } from '../styling/GlobalStyling';

const ControlTasks = styled.div`
  margin: 20px;
  text-align: center;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    padding: 0 10px;
  }
`;

const Categories = styled.div`
  display: flex;

  & p {
    width: 25%;
    text-align: center;
    padding: 5px;
    background: #f5f0ea;
    margin: 2px;
    font-size: 12px;
    color: #000;
  }
`;

const CompletedHeadline = styled.h2`
  font-size: 16px;
  margin: 50px 0 15px 0;
  text-transform: uppercase;
`;

// -----------------------------------------------------------------------------

export const ListOfTodos = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector((store) => store.todos.tasks);

  //Filtering by completed/not completed
  const nonCompletedTasks = allTodos.filter((todo) => !todo.isCompleted);
  const completedTasks = allTodos.filter((todo) => todo.isCompleted);

  const handleCompleteAll = () => {
    dispatch(todos.actions.completeAllTodos());
  };

  const handleRemoveAll = () => {
    dispatch(todos.actions.removeAllTodos());
  };

  return (
    <MainWrapper>
      {/* <Categories>
        <p>Category 1</p>
        <p>Category 2</p>
        <p>Category 3</p>
        <p>Category 4</p>
      </Categories> */}
      {nonCompletedTasks.length === 0 && <p>Add a task...</p>}

      {nonCompletedTasks.reverse().map((task, index) => {
        console.log(task);
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
      <ControlTasks>
        <p>
          Complete all tasks <Button onClick={handleCompleteAll}>✓</Button>
        </p>
        <p>
          Remove all tasks <Button onClick={handleRemoveAll}>✕</Button>
        </p>
      </ControlTasks>
    </MainWrapper>
  );
};
