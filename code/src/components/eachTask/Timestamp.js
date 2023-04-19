import React from 'react';

export const Timestamp = ({ singleTask }) => {
  const timestampFullDate = new Date(singleTask.id)
  console.log(timestampFullDate)
  const timestampDate = timestampFullDate.getDate();
  console.log(timestampDate)
  const timestampMonth = timestampFullDate.getMonth() + 1;
  console.log(timestampMonth)
  return (
    <p>Scheduled:{timestampDate}/{timestampMonth}</p>
  )
}