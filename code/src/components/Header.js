import React, { useState } from 'react';
import styled from 'styled-components';
import ClearAllTask from './ClearAllTask';

import CompleteTaskList from './CompleteTaskList';

const HeaderBox = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(155, 93, 229);
	border-radius: 10px;

    .header-text {
      color: white;
    }
  }
  // &.side-hidden {
  //   display: none;
  // }
`;

const Header = () => {
  // const [isActive, setActive] = useState(false);

  // const toggleClass = () => {
  //   setActive(!isActive);
  // };

  return (
    <>
      <HeaderBox>
        {/* <button
        // className={isActive ? 'side-active' : 'side-hidden'}
        onClick={toggleClass}
      >
        ✔️
      </button> */}
        {/* {isActive ? <CompleteTaskList /> : null} */}
        <CompleteTaskList />
        {/* <CompleteTaskList
        className={isActive ? 'task-list-active' : 'task-list-hidden'}
      /> */}
        <h1 className='header-text'> 🌈TASKER</h1>
        <ClearAllTask />
      </HeaderBox>
    </>
  );
};

export default Header;
