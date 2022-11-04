import React from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';

const TodaysDate = () => {
  return (
    <NowDate>&quot;Today is {format(new Date(), 'MMMM do')}&quot; </NowDate>
  )
}

export default TodaysDate

const NowDate = styled.p`
text-align: center;
margin-top: 80px;
color: var(--primary);

@media (min-width: 600px) and (max-width: 900px){
  margin-top: 150px;
  font-size: 21px;
}

@media (min-width: 901px){
  margin: 200px 0;
  font-size: 25px;
}
`