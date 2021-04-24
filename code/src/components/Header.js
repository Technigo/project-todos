import React from 'react';
import styled from 'styled-components';
import moment from 'moment';


const CurrentDate = styled.p`
  margin: 0 0 15px 0;
  color: white;
`

//This component shows the app header and the tasks to be completed
//Accesses the global state and gets the complete current to do list. Then, filters out the
//tasks in that list with property complete: false and returns the length of that array
 const Header = () => {
  return (
    <div className="header">
      <h1 className="app-title">MY TODOs APP</h1>
      <CurrentDate>{moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')}</CurrentDate>  
    </div>
  )
};

export default Header


