import React from 'react';
import styled from 'styled-components/macro';
/* import moment from 'moment'; */

const Header = () => {
  /* const date = {
    todaysDate: moment().format('LLL')
  } */
  return (
    <HeaderStyle>
      <div className="container-right">
        <h1>ToDo</h1>
        <p>Keep track on your tasks</p>
      </div>
      <div className="container-left">
        <p>{/* {date} */}</p>
      </div>
    </HeaderStyle>
  )
}

export default Header

const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: blue;
    height: 15vh;
    color: white;
   
    .container-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .container-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
  }
    h1 {
        font-size: 50px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    p {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-weight: 200;
        font-size: 15px;
    }
`