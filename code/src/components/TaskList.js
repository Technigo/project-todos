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
          <TaskItem key={singleTask.id}>

            <CheckboxTask>
              <p>
                <input
                  type="checkbox"
                  id="checkboxId"
                  checked={singleTask.isChecked}
                  onChange={() => onCheckedToggle(singleTask.id)} />
                <Label htmlfor="checkboxId">{singleTask.name}</Label>
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
`
// input {
//   opacity 1;
//   z-index: 5;
// }

// [type="checkbox"] + label {
//   padding-left: 10px;
//   cursor: pointer;
//   display: inline-block;
//   line-height: 0.5rem;
// }

// [type="checkbox"] + label::before {
//   content:"";
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 18px;
//   height: 18px;
//   border: 1px solid #000;
// }

// [type="checkbox"]:checked + label::before {
//   content:"";
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 18px;
//   height: 18px;
//   border: 1px solid red;
// }

const Label = styled.label`
  font-size: 1rem;
  font-weight: 400;
  padding: 10px;
`