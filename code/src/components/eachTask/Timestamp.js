import React from 'react';

export const Timestamp = ({ timeToConvert }) => {
  const timestampFullDate = new Date(timeToConvert)
  // console.log(timestampFullDate)
  const timestampDate = timestampFullDate.getDate();
  // console.log(timestampDate)
  const timestampMonth = timestampFullDate.getMonth() + 1;
  // console.log(timestampMonth)
  return (
    <span>{timestampDate}/{timestampMonth}</span>
  )
}