import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';


import DeleteTask from './DeleteTask';
import tasks from 'reducers/tasks';
import CompleteAllTask from './CompleteAllTask';

const CompletedTaskBox = styled.section`
  &.side-active {
    background-image: url('https://images.pexels.com/photos/3876635/pexels-photo-3876635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    font-family: 'Shippori Antique', sans-serif;
    font-family: 'Itim', cursive;
	  color: rgb(53, 56, 75);
    font-size: 1.5em;
    transition: all 1s ease-in-out 0.3s;
	

    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 20px;
    justify-content: center;
    
      

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
      width: 100%;
	  
    }

    .time {
      font-size: 0.8em;
    }

    .list-box {
      height: 75%;
      overflow-y: scroll;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      margin-top: 5rem;
      width: 95%;
      background-color: rgb(170, 246, 131, 0.9);
      border-radius: 10px;
    }

    .empty {
      font-size: 1.5em;
      height: 10rem;
      width: 10rem;
      padding: 5rem;
    }

    p {
      overflow-wrap: break-word;
    }

    .list {
      border-bottom: 4px double rgb(8, 99, 117, 0.5);
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
          <div className='list' key={item.id}>
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
        {items <= items.length ? <p className='empty'>nothing here... <span role='img' aria-label='img'>🤔</span></p> : null}
      </div>
      <CompleteAllTask items={items} />
    </CompletedTaskBox>
  );
};

export default CompleteTaskList;
