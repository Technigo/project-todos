import React from 'react'
import moment from 'moment'

import { DateText } from './StyledComponents/DateTextStyling'

export const Header = () => { 
  return (
  <DateText>
    {moment().format("dddd, Do MMMM")}
  </DateText>
  );
};