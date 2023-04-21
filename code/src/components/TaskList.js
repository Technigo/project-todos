import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todolist from 'reducers/todolist';
import styled from 'styled-components';
import DeleteTask from './DeleteTask';

const SingleTaskDiv = styled.div`
width: 400px;
margin: 10px;
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 10px;

input[type=checkbox] {
  border: none;
  cursor: pointer;
  -webkit-appearance: none;
    -moz-appearance: none;
  position: relative;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background: rgba(255, 255, 255, 0.12);
  border: rgba(255, 255, 255, 0.12);
  overflow: hidden;
::before {
  content: '';
  position: absolute;
  top: 10%;
  left: 10%;
  height: 80%;
  width: 80%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
}
::after {
  border: none;
  content: '';
  position: absolute;
  top: 10%;
  left: 10%;
  height: 80%;
  width: 80%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: -4px -2px 4px 0px #fff, 4px 2px 8px 0px #d1d9e6;
  transform: scale3d(1, 1, 1);
  transition: opacity .25s ease-in-out, transform .25s ease-in-out;
}
}

input:checked {
  ::after {
  transform: scale3d(.975, .975, 1) translate3d(0, 10%, 0);
  content: '✓';
  color: white;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}
}`

const CheckBoxAndTask = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 10px;
width: 360px;
height: 50px;`

const TaskList = ({ inputValue }) => {
  const dispatch = useDispatch();
  const todoList = useSelector((store) => store.todolist.items);

  const handleOnChange = (id) => {
    dispatch(todolist.actions.toggleTask(id));
  };

  return (
    <section>
      {todoList.map((singletask) => {
        return (
          <SingleTaskDiv key={singletask.id}>
            <CheckBoxAndTask>
              <input
                className="custom-checkbox"
                type="checkbox"
                id={singletask.id}
                value={inputValue}
                checked={singletask.isChecked}
                onChange={() => handleOnChange(singletask.id)} />
              {singletask.name}<br />
              {singletask.time}
            </CheckBoxAndTask>
            <div>
              <DeleteTask singletask={singletask} />
            </div>
          </SingleTaskDiv>
        )
      })}
    </section>
  )
}

export default TaskList;