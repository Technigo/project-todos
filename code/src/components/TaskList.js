/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components'
/* import trashCan from 'assets/icon-delete.svg'
 */
const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items)

  const dispatch = useDispatch();

  const onIsCompleteToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id))
  }

  const onRemoveButtonClick = (taskIndex) => {
    dispatch(tasks.actions.removeTask(taskIndex))
  }
  return (
    <section>
      {taskList.map((singleTask) => {
        return (
          <StyledTask>
            <label>
              <Checkbox
                type="checkbox"
                name="tasks"
                checked={singleTask.complete}
                onChange={() => onIsCompleteToggle(singleTask.id)}
                id={singleTask.id} />
            </label>
            <p>{singleTask.text}</p>
            <StyledDeleteButton type="button" onClick={onRemoveButtonClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                height="35"
                width="35">
                <path
                  fill="#fff"
                  d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z"
                  clipRule="evenodd"
                  fillRule="evenodd" />
              </svg>
            </StyledDeleteButton>
          </StyledTask>
        )
      })}
    </section>
  )
}

export default TaskList

const StyledTask = styled.article`
background-color: var(--color-grey);
border: 2px solid white;
border-radius: 20px;
width: 70vw;
display: flex;
justify-content: space-between;
padding: 0 1.5em;
box-sizing: border-box;
margin: 0.5rem 0;
color: var(--color-darkGrey);

@media (min-width: 667px) and (max-width: 1024px)  {
width: 50vw;
}
@media screen and (min-width: 1024px) {
width: 25vw;
}
`
export const Checkbox = styled.input`
  -webkit-appearance: none;
  /* For iOS < 15 to remove gradient background */
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: grey;
  width: 1.8em;
  height: 1.8em;
  border-radius: 10px;
  margin-top: 35%;
  display: grid;
  place-content: center;
@media screen and (min-width: 1024px) {
  &:hover {
  cursor: pointer;
  border: 0.1em solid var(--color-darkGreen);
}}
::before {
  content: "";
  width: 0.9em;
  height: 0.9em;
  border-radius: 20px;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--color-darkGreen);
  transform-origin: bottom left;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}
:checked::before {
  transform: scale(1);
}
`
const StyledDeleteButton = styled.button`
border: none;
width: 3em;
height: 3em;
cursor:pointer;
background: transparent;

@media screen and (min-width: 1024px) {
  & :hover{
    background: var(--color-darkGreen);
    border-radius: 5px;
  }
}
`