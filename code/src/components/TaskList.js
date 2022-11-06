import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { Wrapper } from 'styles/GlobalStyles';
import { tasks } from 'reducers/tasks';
import bin from 'assets/bin-icon.svg';
import coffee from 'assets/coffeeJsx.svg';
import { Overview } from './Overview';
import { CheckBox } from './CheckBox';

export const TaskList = () => {
  // Get all the tasks currently in the store:
  const allTasks = useSelector((store) => store.tasks.taskData);

  const dispatch = useDispatch();

  // Function for toggling the checkbox between checked and unchecked
  const isCompleteToggle = (task) => {
    dispatch(tasks.actions.toggleItem(task));
  }

  // Function for deleting a task from the list
  const deleteTask = (task) => {
    dispatch(tasks.actions.removeToDo(task));
  }

  // If there are any tasks, display them with a checkbox and a delete button,
  // as well as the overview:
  if (allTasks.length > 0) {
    return (
      <>
        <Wrapper>
          {allTasks.map((task) => (
            <TaskItem key={task.id}>
              <CheckBox
                id={task.id}
                checked={task.complete}
                onChange={() => isCompleteToggle(task.id)} />
              <TaskText><span>{task.text}</span></TaskText>
              <Deletebtn type="button" onClick={() => deleteTask(task.id)}>
                <DeleteIcon src={bin} alt="" />
              </Deletebtn>
            </TaskItem>
          ))}
        </Wrapper>
        <Overview />
      </>
    )
  } else {
    return (
      <Wrapper>
        <Congrats>Nice work!</Congrats>
        <h3>There are no tasks for you to complete.</h3>
        <CoffeeCup src={coffee} alt="steaming coffee cup" />
        <h4>Sit back and relax, or enter some todos above!</h4>
      </Wrapper>
    )
  }
}

// STYLING FOR ABOVE COMPONENT
const TaskItem = styled.div`
  display: flex;
  width: 100%;
  border-radius: 50px;
  margin: 0.5rem 0;
  align-items: center;
`

const TaskText = styled.div`
  margin: 0 0.3rem;
  color: black;
  display: inline-block;
  width: 90%;
  padding: 0.7rem 0.7rem 0.7rem 1.5rem;
  border-radius: 3rem;
`

const Deletebtn = styled.button`
  border: transparent;
  background: transparent;
  cursor: pointer;
`

const DeleteIcon = styled.img`
  width: 1.3rem;
`

const Congrats = styled.h2`
  color: #5B446A;
`

const CoffeeCup = styled.img`
  width: 50%;
  align-self: center;
  margin: 1rem 0;
`