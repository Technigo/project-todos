import React from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'

import CHECK from 'assets/checkwhite.png'

export const Header = () => {
  // Show total number of items in task-list
  const tasksArray = useSelector((store) => store.tasks.items);
  // Show number of completed items in task-list
  const completedTasks = tasksArray.filter((task) => task.isComplete);

  return (
    <HeaderOuterWrapper>
      <HeaderInnerWrapper>
        <img className="mageColor" src={CHECK} alt="bild" height="100px" />
        <h1>MY TODOs</h1>
        <p>You have completed:  {completedTasks.length} / {tasksArray.length} </p>
      </HeaderInnerWrapper>
    </HeaderOuterWrapper>
  )
};

export const HeaderOuterWrapper = styled.div`
width: 100vw;
background-color: #F69101;
color: white;
margin:0;
padding:0;
display:flex;
justify-content: center;

`;

export const HeaderInnerWrapper = styled.div`

.imageColor {
  

`;

