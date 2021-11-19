import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import DeleteTask from './DeleteTask';
import tasks from 'reducers/tasks';

const CompletedTaskBox = styled.section`
  &.side-active {
    background-color: rgb(0, 245, 212);
    font-family: 'Shippori Antique', sans-serif;
    word-wrap: break-word;
    height: 60vh;
    font-family: 'Itim', cursive;
    overflow-y: scroll;
	color: #4a4e69;
	

	position: fixed;
	z-index: 20;
	top: 0;
	left: 0;
	width: 200px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: bold;
	background: black;
	padding-right: 20px;
	justify-content: center;
	background-color: #00F5D4;

   
    @media (min-width: 768px) {
      width: 400px;
    }

    ${
      '' /* @media (min-width: 1366px) {
      width: ${(props) => props.wid * 0.5}px; */
    } */}
    

    span {
      display: inline;
      height: 0.5em;
      width: 0.5em;
      font-size: 1em;
	  opacity: 0.8;
    }

    button {
      border: none;
      background: transparent;
    }

    .checkbox {
      appearance: none;
      background-color: #fff;
      margin: 0;
      font: inherit;
      color: black;
      width: 2em;
      height: 2em;
      border: 0.15em solid #00bbf9;
      border-radius: 1em;
      transform: translateY(-0.075em);
      display: grid;
      place-content: center;
    }
    .checkbox::before {
      content: '';
      width: 1.3em;
      height: 1.3em;
      border-radius: 50%;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em #00bbf9;
    }
    .checkbox:checked::before {
      transform: scale(1);
    }

    .text-box {
      display: flex;
      flex-direction: column;
      width: 100%;
      text-align: left;
      align-items: stretch;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
	  width: 100%;
    }

    .time {
      font-size: 0.6em;
    }

	h2 {
		position: absolute;
		top: 3em;
	}

	
  }

  &.side-hidden {
    display: none;
  }
`;

const CompleteButton = styled.button`
  z-index: 30;
`;

const CompleteTaskList = ({ active }) => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  const dispatch = useDispatch();

  const onToggleCheck = (id) => {
    dispatch(tasks.actions.toggleCheck(id));
  };
  const items = useSelector((store) =>
    store.tasks.items.filter((item) => item.complete === true)
  );
  return (
    <>
      <CompleteButton
        // className={isActive ? 'side-active' : 'side-hidden'}
        onClick={toggleClass}
      >
        Done
      </CompleteButton>
      <CompletedTaskBox className={isActive ? 'side-active' : 'side-hidden'}>
        <h2>Completed Tasks</h2>
        {items.map((item) => (
          <div key={item.id}>
            <input
              className='checkbox'
              type='checkbox'
              checked={item.complete}
              onChange={() => onToggleCheck(item.id)}
            />
            <div className='text-box'>
              <p>{item.text}</p>
              <p>{item.timestamp}</p>
            </div>
            <DeleteTask item={item.id} />
          </div>
        ))}
      </CompletedTaskBox>
    </>
  );
};

export default CompleteTaskList;
