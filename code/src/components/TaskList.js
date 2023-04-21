/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { tasks } from 'reducers/tasks';
import { useSelector, useDispatch } from 'react-redux';
import { format, isToday, isYesterday } from 'date-fns';
import styled from 'styled-components';

const StyledTaskListContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
    font-family: 'Roboto', sans-serif;

    ul {
      width: 100%;
    }
`;

const StyledSingleTaskWrapper = styled.div`
    display: flex;
    align-items: center;
    border: none;
    margin: 20px 0;
    padding: 20px;
    border-radius: 25px 2px 25px 2px;
    -webkit-border-radius: 25px 2px 25px 2px;
    -moz-border-radius: 25px 2px 25px 2px;
    box-shadow: 0 5px 8px  rgb(140,115,115,0.2), 0 3px 10px  rgb(140,115,115,0.2);
    background-color: #F0EFEB;

    input {
      cursor: pointer;
    }
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 80%;
  row-gap: 10px;

  p {
    word-wrap: break-word;
    margin-left: 10px;
  }
`;

const StyledSingleTask = styled.p`
  font-size: 28px;
  font-family: 'Caveat', cursive;
`;

const StyledTimeP = styled.p`
  font-size: 14px;
  color: grey;
`;

const StyledDeleteSingleBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #B7B7A4;
    border: solid grey 1px;
    padding: 12px;
    width: 20px;
    height: 20px;
    border-radius: 8px 2px 8px 2px;
    -webkit-border-radius: 8px 2px 8px 2px;
    -moz-border-radius: 8px 2px 8px 2px;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }

    &:active {
      background-color: #A5A58D;
    }
`;

const StyledDeleteAllBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin: 10px 0;
    width: 50%;
    max-width: 150px;
    background-color: #D4C7B0;
    color: #3F4238;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    border: none;
    border-radius: 10px 2px 10px 2px;
    -webkit-border-radius: 10px 2px 10px 2px;
    -moz-border-radius: 10px 2px 10px 2px;
    box-shadow: 0 5px 8px  rgb(140,115,115,0.2), 0 3px 10px  rgb(140,115,115,0.2);
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      color: white;
      background-color: #A5A58D;
    }

    @media (min-width: 667px) {
      width: 30%;
    }

    @media (min-width: 1024px) {
      width: 25%;
    }
`;

const CheckboxTypeDiv = styled.div`

  [type='checkbox'] {
    opacity: 0;
  }

  [type='checkbox'] + label {
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    display: inline-block;
    color: darkgreen;
    line-height: 25px;
  }

  [type='checkbox'] + label::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    outline: 2px solid blue;
    background: white;
  }

  [type='checkbox']:checked + label::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    outline: 2px solid red;
    background: white;
  }

  [type='checkbox']:checked + label::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    background-image: url(${process.env.PUBLIC_URL}/assets/icons8-done-30.png);
    background-size: contain;
    transform: scale(1);
    opacity: 1;
    transition: all .3s ease;
  }

  [type='checkbox']:not(:checked) + label::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    background-image: url(${process.env.PUBLIC_URL}/assets/icons8-done-30.png);
    background-size: contain;
    transform: scale(0);
    opacity: 0;
  }
`;

export const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch();

  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('taskList'));
    if (tasksFromLocalStorage) {
      dispatch(tasks.actions.setUpStore(tasksFromLocalStorage))
    }
  }, [dispatch])

  const onDeleteAllTasks = () => {
    dispatch(tasks.actions.deleteAllTasks());
  }

  const onDeleteSingleTaskBtnClick = (id) => {
    dispatch(tasks.actions.deleteSingleTask(id));
  }

  const onIsDoneCheckboxToggle = (id) => {
    dispatch(tasks.actions.toggleIfTaskIsDone(id));
  }

  const formatDate = (date) => {
    const time = format(date, 'HH:mm');
    if (isToday(date)) {
      return `Today ${time}`;
    } else if (isYesterday(date)) {
      return `Yesterday ${time}`;
    } else {
      return `${format(date, 'EEEE')} ${time}`;
    }
  }

  return (
    <StyledTaskListContainer>
      <ul>
        {taskList.map((singleTask) => {
          const dateObject = new Date(singleTask.createdAt);
          const time = formatDate(dateObject);

          return (
            <StyledSingleTaskWrapper key={singleTask.id}>
              <CheckboxTypeDiv>
                <input
                  type="checkbox"
                  id={`{task_with_id${singleTask.id}`}
                  value={singleTask.isDone}
                  name="singleTaskCheckbox"
                  onChange={() => onIsDoneCheckboxToggle(singleTask.id)} />

                <label htmlFor={`{task_with_id${singleTask.id}`}>
                  <StyledListItem>
                    <StyledSingleTask>{singleTask.name}</StyledSingleTask>
                    <StyledTimeP>Added {time}</StyledTimeP>
                  </StyledListItem>
                </label>
              </CheckboxTypeDiv>

              <StyledDeleteSingleBtn
                type="button"
                onClick={() => onDeleteSingleTaskBtnClick(singleTask.id)}>
               ✖️
              </StyledDeleteSingleBtn>
            </StyledSingleTaskWrapper>
          )
        })}
      </ul>
      <StyledDeleteAllBtn type="button" onClick={onDeleteAllTasks}>Delete all tasks ✖️</StyledDeleteAllBtn>
    </StyledTaskListContainer>
  )
}