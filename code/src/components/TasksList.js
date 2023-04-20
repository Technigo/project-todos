import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RemoveTask } from 'components/RemoveTask';
import { EmptyList } from 'components/EmptyList';
import { tasks } from 'reducers/tasks';
import TaskCount from 'components/TaskCount';
import styled from 'styled-components';
import checkImage from '../images/check-green.png'

export const TasksList = () => {
  const tasksList = useSelector((store) => store.tasks.todos);
  const dispatch = useDispatch();

  const handleCheckboxChange = (taskId) => {
    dispatch(tasks.actions.toggleComplete(taskId));
  };

  return (
    <StyledSection>
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
  background-color: aliceblue;
  padding-left: 2px;
  padding-right: 2px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
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
