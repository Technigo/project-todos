import React, { useState } from 'react';
import styled from 'styled-components';
import ClearAllTask from './ClearAllTask';
import { useWindowSize } from '@react-hook/window-size';

import CompleteTaskList from './CompleteTaskList';

const HeaderBox = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(155, 93, 229);
    border-radius: 10px;
    height: 4em;
    

    .header-text {
      color: white;
      position: absolute;
      width: 160px;
      left: ${props => props.wid / 2 - 92}px;

      @media (min-width: 768px) {
    left: ${(props) => props.wid * 0.9 * 0.35}px;
    }

    @media (min-width: 1366px) {
    left: ${(props) => props.wid * 0.5 / 2 - 92}px;
    }
    }

    &.flexChange {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

const CompleteButton = styled.button`
    z-index: 30;
    font-family: 'Shippori Antique', sans-serif;
    height: 3.5em;
    width: 3.5em;
    border: none;
    background: transparent;
    border-radius: 45px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease 0s;
    outline: none;
    position: relative;

    font-size: 1.1em;

    span {
      font-size: 1.4em;
      position: absolute;
      top: 0;
      left: -8px;
      
    }

    .btn-text {
      text-align: center;
      width: 100%;
    }

  &:hover {
    background-color: rgb(57, 230, 0, 0.8);
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #fff;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: black;
    transform: translateY(7px);
  }

  &.move {
    position: absolute;
    text-align: center;
    background-color: rgb(57, 230, 0, 0.8);
    width: ${(props) => props.wid * 0.6}px;
    left: ${(props) => props.wid * 0.15}px;

    @media (min-width: 768px) {
      position: absolute;
      left: ${(props) => props.wid * 0.04 * -1}px;
      width: ${(props) => props.wid * 0.3}px
    }

    @media (min-width: 1366px) {
      left: ${(props) => props.wid * 0.2 * -1}px;
    }
  }

  

 
`;

const Header = () => {
  const [width, height] = useWindowSize();
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  console.log(width);
  console.log(width / 2)


  return (
    <>
      <HeaderBox className={isActive ? 'flexChange' : null} hgt={height} wid={width}>
        <CompleteButton
          hgt={height} wid={width}
          className={isActive ? 'move' : null}
          onClick={toggleClass}
        >
          <span className="btn-text"> {isActive ? 'Completed Task 🎯' : '📝'}</span>
        </CompleteButton>
        <CompleteTaskList isActive={isActive} />
        <h1 className='header-text'> <span role='img' aria-label='img'>🌈</span>TASKER</h1>
        <ClearAllTask />
      </HeaderBox>
    </>
  );
};

export default Header;
