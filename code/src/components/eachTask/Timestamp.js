import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { TimestampStyles } from './EachTask.styles';

export const Timestamp = ({ timeToConvert }) => {
  const timestampFullDate = new Date(timeToConvert)
  // console.log(timestampFullDate)
  const timestampDate = timestampFullDate.getDate();
  // console.log(timestampDate)
  const timestampMonth = timestampFullDate.getMonth() + 1;
  // console.log(timestampMonth)
  const overdue = timestampFullDate < Date.now()
  console.log(overdue)
  return (
    <>
      {!overdue && (<TimestampStyles>Due: {timestampDate}/{timestampMonth}</TimestampStyles>)}
      {overdue && (<TimestampStyles textColor="#c3473c"><FontAwesomeIcon icon={faCircleExclamation} /> Due: {timestampDate}/{timestampMonth}</TimestampStyles>)}
    </>
  )
}