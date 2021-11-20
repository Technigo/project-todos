import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';


import DeleteTask from './DeleteTask';
import tasks from 'reducers/tasks';

const CompletedTaskBox = styled.section`
  &.side-active {
    background-color: rgb(0, 245, 212);
    font-family: 'Shippori Antique', sans-serif;
    word-wrap: break-word;
    font-family: 'Itim', cursive;
	  color: #4a4e69;
    font-size: 1.5em;
	

    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: black;
    padding-right: 20px;
    justify-content: center;
    background-color: #00F5D4;
      

    span {
      display: inline;
      height: 0.5em;
      width: 0.5em;
      font-size: 1.3em;
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
      border: 0.15em solid rgb(140, 255, 102);
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
      box-shadow: inset 1em 1em rgb(140, 255, 102);
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
      align-items: center;
      width: 80%;
	  
    }

    .time {
      font-size: 0.8em;
    }

    .list-box {
      height: 100%;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      margin-top: 5rem;
      width: 100%;
    }

    .empty {
      font-size: 1.5em;
      height: 10rem;
      width: 10rem;
      padding: 5rem;
    }

    p {
      overflow-wrap: anywhere;
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


const CompleteTaskList = ({ isActive }) => {
  let [checked, setChecked] = useState(true);

  const dispatch = useDispatch();

  const onToggleCheck = (id) => {
    dispatch(tasks.actions.toggleCheck(id));
  };
  const items = useSelector((store) =>
    store.tasks.items.filter((item) => item.complete === true)
  );

  const onSetChecked = (id) => {
    setChecked(!checked);
    setTimeout(() => onToggleCheck(id), 2000);
  };

  checked = items.complete;

  return (
    <CompletedTaskBox className={isActive ? 'side-active' : 'side-hidden'}>

      <div className='list-box'>
        {items.map((item) => (
          <div key={item.id}>
            <input
              className='checkbox'
              type='checkbox'
              checked={checked}
              defaultChecked
              onChange={() => onSetChecked(item.id)}
            />
            <div className='text-box'>
              <p>{item.text}</p>
              <p className='time'>{item.timestamp}</p>
            </div>
            <DeleteTask className='xbtn' item={item.id} />
          </div>

        ))}
        {items <= items.length ? <p className='empty'>nothing here... 🤔</p> : null}
      </div>
    </CompletedTaskBox>
  );
};

export default CompleteTaskList;
