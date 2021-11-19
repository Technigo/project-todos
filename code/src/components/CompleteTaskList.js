import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useWindowSize } from '@react-hook/window-size';


import DeleteTask from './DeleteTask';
import tasks from 'reducers/tasks';

const CompletedTaskBox = styled.section`
  &.side-active {
    background-color: rgb(0, 245, 212);
    font-family: 'Shippori Antique', sans-serif;
    word-wrap: break-word;
    font-family: 'Itim', cursive;
	  color: #4a4e69;
	

	position: fixed;
	z-index: 20;
	top: 0;
	left: 0;
	width: 300px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: bold;
	background: black;
	padding-right: 20px;
	justify-content: center;
	background-color: #00F5D4;
    

    span {
      display: inline;
      height: 0.5em;
      width: 0.5em;
      font-size: 1em;
	  opacity: 0.8;
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

    .list-box {
      height: 100%;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      margin-top: 5rem;
    }

	h2 {
		position: absolute;
		top: 3em;
	}

  @media (min-width: 768px) {
    width: 40%;
  }
}

  &.side-hidden {
    display: none;
  }
`;

const CompleteButton = styled.button`
    z-index: 30;
    font-family: 'Shippori Antique', sans-serif;
    height: 3.5em;
    border: none;
    background: transparent;
    border-radius: 45px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease 0s;
    outline: none;

  &:hover {
    background-color: rgb(63, 102, 0);
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }

  &:active {
    background-color: #fff;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: black;
    transform: translateY(-5px);
  }

  &.move {
    position: absolute;
  }

  @media (min-width: 768px) {
    &.move {
      left: ${(props) => props.wid * 0.04 * -1}px;
    }
  }

  @media (min-width: 1366px) {
    &.move {
      left: ${(props) => props.wid * 0.2 * -1}px;
    }
  }
`;

const CompleteTaskList = () => {
  const [width, height] = useWindowSize();
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
        hgt={height} wid={width}
        className={isActive ? 'move' : null}
        onClick={toggleClass}
      >
        {isActive ? 'Completed Task' : 'See Completed Task'}
      </CompleteButton>
      <CompletedTaskBox className={isActive ? 'side-active' : 'side-hidden'}>
        <div className='list-box'>
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
        </div>
      </CompletedTaskBox>
    </>
  );
};

export default CompleteTaskList;
