import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import tasks from './reducers/tasks.js';
import mp3 from './assets/check.mp3';
import { Button } from './styles/global';

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    margin: 0 20px;
    border: solid green 2px;

    [type="checkbox"] {
      width: 100px;
      height: 100px;
      position: relative;
      padding-left; 30px;
      cursor: pointer;
      color: green;
      line-height: 25px;
    }

    [type="checkbox"] + label{
      width: 100px;
      height: 100px;
      position: relative;
      padding-left; 30px;
      cursor: pointer;
      color: green;
      line-height: 25px;
    }

    [type="checkbox"]:checked + label::before{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100px;
      height: 100px;
      outline: 2px solid black;
      background: pink;
      transform: scale(1);
      transition: all .3s ease;
    }

    [type="checkbox"] + label::before{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100px;
      height: 100px;
      outline: 2px solid yellow;
      background: pink;
    }

    [type="checkbox"]:not(:checked) + label::after{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100px;
      height: 100px;
      background-image:url(./assets/vecteezy_hand-drawn-blue-check-mark-in-black-square-flat-vector_7042389.jpg);
      background-size: contain;
      transform: scale(0);
      }


    [type="checkbox"] + label::after{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 50px;
      height: 50px;
      // background-image:url(https://lh3.googleusercontent.com/pw/AJFCJaXZbz_cEXotxm2zQKD4qcxfVQvUDDygGprKDn9fwW4xxLDQmwDESZZgdIj73K6Y1fXAqRsmKb4UoQRWtMe8J3REfORXpse_0_W4zUSkNRmB-L9LnQU=w2400);
      // background-size: contain;
      }

`

const TaskText = styled.p`
    font-size: 1em;
    font-family: Garamond;
    line-height: 0.5em;
    width: 100%;
`

const playSound = () => {
  const audio = new Audio(mp3);
  audio.play();
}

const TaskList = () => { // Function.
  const taskList = useSelector((store) => store.tasks.items) // useSelector
  // to select the list/slice of tasks from Redux store and from that map over
  // them/select an item. We go to our store and grab the items from our task.
  const dispatch = useDispatch();
  const onDeleteSingleTaskBtnCLick = (id) => { // Function. Parameter = Id.
    dispatch(tasks.actions.deleteSingleTask(id)); // Dispatch the action
  }
  const onIsCompletedCheckboxToggle = (id) => { // To establish, we need the id.
    dispatch(tasks.actions.toggleIfTaskIsCompleted(id)); playSound(); // Since id
    // we need to dispatch an action.
  }
  return (
    <section>
      <ul>
        {taskList.map((singleTask) => {
          return (
            <InnerWrapper>
              <label htmlFor={`task_with_id${singleTask.id}`}>
                <input
                  id={`task_with_id${singleTask.id}`}
                  type="checkbox"
                  value={singleTask.isCompleted}
                  onChange={() => onIsCompletedCheckboxToggle(singleTask.id)}
                  onClick={playSound}
                  checked={singleTask.isCompleted} />
              </label>
              <TaskText>
                {singleTask.name}
              </TaskText>
              <Button
                type="button"
                onClick={() => onDeleteSingleTaskBtnCLick(singleTask.id)}>
                Delete task
              </Button>
            </InnerWrapper>
          )
        })}
      </ul>
    </section>
  )
}

// id as key and singleTask.name in list = printed out value.
// store = backpack
export default TaskList;