import React from 'react';
import { formatRelative } from 'date-fns';
import styled from 'styled-components';

const TodaysDate = () => {
  return (
    <NowDate>Today is {formatRelative(new Date(), new Date())}</NowDate>
  )
}

export default TodaysDate

const NowDate = styled.p`
text-align: center;
margin-top: 10px;
color: #c4b6af;
`