import React from "react";

const timeStamp = (created) => {
  let hours = created.getHours();
  if (hours < 10) hours = `0${hours}`;
  let minutes = created.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;

  return `Created at ${hours}:${minutes}`;
};

const TimeStamp = ({ createdAt }) => {
  const parsedTime = JSON.parse(createdAt);
  const todoCreatedAt = new Date(parsedTime);

  return (
    <p>{timeStamp(todoCreatedAt)}</p>
  );
};

export default TimeStamp;