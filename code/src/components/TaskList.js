import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import tasks from './reducers/tasks.js';
import mp3 from './assets/check.mp3';
import { Button } from './styles/global';
// import { CheckboxForm } from './CheckboxForm.js'

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    margin: 1.5em auto 0;
    padding: 0.75em;
    // border: solid green 2px;

    [type="checkbox"] {
      width: 200px;
      height: 200px;
      position: relative;
      padding-left; 30px;
      outline: 5px solid blue;
      line-height: 25px;
      background-image: 
      url("https://s22.postimg.cc/fi4blx4gx/checkmark.png") 0 100% / 1.2em 1.35em no-repeat;    }

    [type="checkbox"] + label{
      width: 100px;
      height: 100px;
      position: relative;
      padding-left; 30px;
      cursor: pointer;
      line-height: 25px;
      background-image: url("https://s22.postimg.cc/fi4blx4gx/checkmark.png") 0 100% / 1.2em 1.35em no-repeat;
    }

    [type="checkbox"]:checked + label::before{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100px;
      height: 100px;
      background: white;
      transform: scale(1);
      transition: all .3s ease;
      background-image: url("https://s22.postimg.cc/fi4blx4gx/checkmark.png") 0 100% / 1.2em 1.35em no-repeat;
    }

    [type="checkbox"] + label::before{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100px;
      height: 100px;
      background-image: url("https://s22.postimg.cc/fi4blx4gx/checkmark.png") 0 100% / 1.2em 1.35em no-repeat;
    }

    [type="checkbox"]:not(:checked) + label::after{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100px;
      height: 100px;
      background-image: 
        url("https://s22.postimg.cc/fi4blx4gx/checkmark.png") 0 100% / 1.2em 1.35em no-repeat;
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
      background-image: 
      url("https://s22.postimg.cc/fi4blx4gx/checkmark.png") 0 100% / 1.2em 1.35em no-repeat;
    }

  //   [type="checkbox]{
  //   box-shadow: 0 0 0 0.125em $bk3 inset;
  //   display: inline-block;
  //   position: relative;
  //   width: 200px;
  //   height: 200px;
  //   vertical-align: middle;
  //   -moz-appearance: none;
  //   -webkit-appearance: none;
  //   padding-left; 30px;
  //   // cursor: pointer;
  //   line-height: 25px;
  //   }

  //   [type="checkbox"] + label{
  //   box-shadow: 0 0 0 0.125em $bk3 inset;
  //   display: inline-block;
  //   position: relative;
  //   width: 200px;
  //   height: 200px;
  //   vertical-align: middle;
  //   -moz-appearance: none;
  //   -webkit-appearance: none;
  //   padding-left; 30px;
  //   // cursor: pointer;
  //   line-height: 25px;
  //   }

  //   [type="checkbox]&:before, &:after {
  //     content: "";
  //     display: block;
  //     position: absolute;
  //   }

  //   [type="checkbox"]:checked + label::before{
  //   content: "";
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   width: 100px;
  //   height: 100px;
  //   outline: 2px solid black;
  //   background: white;
  //   transform: scale(1);
  //   transition: all .3s ease;
  //   background-color: transparent;
  //   }
  
  //   [type="checkbox"]&:before {
  //     background: 
  //       url("https://s22.postimg.cc/fi4blx4gx/checkmark.png") 0 100% / 1.2em 1.35em no-repeat;
  //     bottom: 0.2em;
  //     left: 0.3em;
  //     width: 0;
  //     height: 1.35em;
  //   }

  //   [type="checkbox"]&:after {
  //     background:
  //     background-repeat: no-repeat;
  //     border-radius: 0 0.1em 0.1em 0;
  //     opacity: 0;
  //     visibility: hidden;
  //     transform-origin: 0 0.25em;
  //     width: 12em;
  //     height: 1em;
  //   }
  `

const TaskText = styled.p`
    font-size: 2em;
    font-family: 'Satoshi', sans-serif;
    line-height: 0.5em;
    width: 100%;
    color: blue;
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
                  className="cb pristine"
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
// // store = backpack
export default TaskList;

// CheckboxForm

// // stop erase animations from firing on load
// document.addEventListener('DOMContentLoaded', function(){
// document.querySelector({InnerWrapper}).addEventListener('click',e => {
// const checkboxCL = e.target.classList
// pState = "pristine";

// if (checkboxCL.contains(pState))
// checkboxCL.remove(pState);
// });
// });