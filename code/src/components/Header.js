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
  position: relative;

    .header-text {
      color: white;
      position: fixed;
      left: ${props => props.wid * 0.45}px;
    }
  }
`;

const Header = () => {
  const [width, height] = useWindowSize();

  return (
    <>
      <HeaderBox hgt={height} wid={width}>
        <CompleteTaskList />
        <h1 className='header-text'> <span role='img' aria-label='img'>🌈</span>TASKER</h1>
        <ClearAllTask />
      </HeaderBox>
    </>
  );
};

export default Header;
