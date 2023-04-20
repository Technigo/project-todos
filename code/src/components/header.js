import React from 'react';
import styled from 'styled-components'
import moment from 'moment'

const Title = styled.div`
font-size: 32px;
font-weight: bold;
color:  rgb(121, 182, 193);
text-align: center;
margin-top: 70px;
padding-top: 60px;
`;

const Date = styled.div`
font-size: 15px;
font-weight: bold;
color:  rgb(121, 182, 193);
text-align: center;
padding-top:18px;
padding-bottom: 20px
`

export const Header = () => {
  const dateTime = moment().format('dddd, MMM Do')

  return (
    <div className="header">
      <Title> My to do list </Title>
      <Date className="date">
        <p>{dateTime}</p>
      </Date>
    </div>
  );
}