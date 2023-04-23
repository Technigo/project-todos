import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment';
import Confetti from 'react-confetti';
import { RemoveTask } from 'components/RemoveTask';
import { EmptyList } from 'components/EmptyList';
import { tasks } from 'reducers/tasks';
import TaskCount from 'components/TaskCount';
import styled from 'styled-components';
import checkImage from '../images/accepted.png'

export const TasksList = () => {
  const tasksList = useSelector((store) => store.tasks.todos);
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [currentDate, setCurrentDate] = useState(moment().format('dddd, MMMM Do YYYY'));
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCheckboxChange = (taskId) => {
    dispatch(tasks.actions.toggleComplete(taskId));
    // check if all tasks are completed
    // const allCompleted = tasksList.every((task) => task.complete);
    // if (allCompleted) {
    // setShowConfetti(true); // set showConfetti to true to display the confetti effect
    // }
  };
  useEffect(() => {
    const allCompleted = tasksList.every((task) => task.complete);
    if (allCompleted) {
      setShowConfetti(true);
    } else {
      setShowConfetti(false);
    }
  }, [tasksList]);

  return (
    <StyledSection>
      <h1>{currentDate}</h1>
      {showConfetti && <Confetti />}
      {tasksList.length === 0 ? (
        <EmptyList />
      ) : (
        <StyledUl>
          {tasksList.map((singleTask) => {
            return (
              <StyledLi key={singleTask.id}>
                <StyledCheckbox
                  type="checkbox"
                  checked={singleTask.complete}
                  onChange={() => handleCheckboxChange(singleTask.id)} />
                <StyledRemoveTask task={singleTask} />
              </StyledLi>
            );
          })}
        </StyledUl>
      )}
      <TaskCount />
    </StyledSection>
  )
}
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding-bottom: 20px;
  padding-top: 20px;

  @media (min-width: 668px) {
    height: 100vh; /* Set the height to be the full viewport height */
}
`;

const StyledRemoveTask = styled(RemoveTask)`
  margin-left: auto;
  color: #e74c3c;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0;
  gap: 10px;
`;
const StyledLi = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  line-height: 1.5;
  list-style: none;
  
`;
const StyledCheckbox = styled.input`
  margin-right: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #fff;
  border: 2px solid #777;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  appearance: none;
  
  &:checked {
    background-image: url(${checkImage});
    background-size: 98%;
    background-repeat: no-repeat;
    background-position: center;

       /* animation */
       animation-name: grow;
    animation-duration: 0.3s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  
  @keyframes grow {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.5);
    }
  }
`;
