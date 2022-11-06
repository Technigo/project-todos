import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks';
import DeleteIcon from 'assets/deletetrash.svg';
import styled from 'styled-components/macro';
import { InnerWrapper } from './GlobayStyles';

export const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);

  const dispatch = useDispatch();

  const onCheckedToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
  }

  const onDeleteTaskBtnClick = (taskIndex) => {
    dispatch(tasks.actions.deleteTask(taskIndex));
  }

  return (
    <InnerWrapper>
      {taskList.map((singleTask, index) => {
        return (
          <TaskItem>
            <CheckboxTask>
              <p>
                <input
                  type="checkbox"
                  id={singleTask.id}
                  checked={singleTask.isChecked}
                  onChange={() => onCheckedToggle(singleTask.id)} />
                <Label for={singleTask.id} style={{ textDecoration: singleTask.isChecked ? 'line-through' : '' }} className="check">
                  {singleTask.name}
                </Label>
              </p>
            </CheckboxTask>

            <DeleteBtn onClick={() => onDeleteTaskBtnClick(index)} type="button"><img src={DeleteIcon} alt="submit" className="deleteIcon" /></DeleteBtn>

          </TaskItem>
        )
      })}
    </InnerWrapper>
  )
}

// Difference between .map and for loop
// Implement map functionality with prototype
// function newMap () {
//   for (let index = 0; index < arraySchema.length; index++) {
//     callBackFunction
//   }
// }

const DeleteBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`

const TaskItem = styled.article`
  display: flex;
  justify-content: space-between;

  .deleteIcon {
    opacity: 0.4;
  }

  .deleteIcon:hover {
    opacity: 0.8;
  }
`
// --------Custom checbox--------
const CheckboxTask = styled.div`
  display: flex;
  align-items: center;
  text-align: left;

  p {
    margin: 10px 0;
    position: relative;
  }

  [type="checkbox"] {
    opacity: 0;
  }

  [type="checkbox"] + label {
    padding-left: 10px;
    cursor: pointer;
    display: inline-block;
    line-height: 0.5rem;
  }

  [type="checkbox"] + label::before {
    content:"";
    position: absolute;
    top: 3px;
    left: 0;
    width: 18px;
    height: 18px;
    border: 1px solid grey;
    border-radius: 3px;
  }

  [type="checkbox"]:checked + label::before {
    content:"";
    position: absolute;
    top: 3px;
    left: 0;
    width: 18px;
    height: 18px;
    border: 1px solid grey;
    border-radius: 3px;
  }

    [type="checkbox"]:checked + label::after{
    content:"";
    position: absolute;
    top: 3px;
    left: 0;
    width: 18px;
    height: 18px;
    border: 1px solid grey;
    background-image: url(/check-mark.png);
    background-size: contain;
    border-radius: 3px;

   
  }

  [type="checkbox"]:not(:checked) + label::after{
    content:"";
    position: absolute;
    top: 3px;
    left: 0;
    width: 18px;
    height: 18px;
    border: 1px solid grey;
    background-image: url(/check-mark.png);
    background-size: contain;
    border-radius: 3px;
    transform: scale(0);
    opacity: 0;
  }
`

const Label = styled.label`
  font-size: 1rem;
  font-weight: 400;
  padding: 10px;
`