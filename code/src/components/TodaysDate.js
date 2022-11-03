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
margin-top: 0;
color: #046582;
`

/* format(new Date(), "'Today is a' eeee")
//=> "Today is a Wednesday"
 */