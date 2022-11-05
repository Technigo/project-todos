import React from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';

const TodaysDate = () => {
  return (

    <NowDate>Today is {format(new Date(), 'MMMM do')}&quot; </NowDate>

  )
}

export default TodaysDate

const NowDate = styled.p`
  text-align: center;
  margin-left: 50px;
  color: var(--quinary);

@media (min-width: 600px) and (max-width: 900px){
  margin-left: 90px;
  font-size: 21px;
}

@media (min-width: 901px){
  margin-left: 80px;
  font-size: 35px;
}
`