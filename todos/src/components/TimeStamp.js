import React from "react";

import { Time } from "styles";

const timeStamp = (created) => {
  const dateStamp = created.toDateString().split(' ').slice(1, -1).join(' ');
  let hours = created.getHours();
  if (hours < 10) hours = `0${hours}`;
  let minutes = created.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;

  return `created ${dateStamp} at ${hours}:${minutes}`;
};

const TimeStamp = ({ createdAt }) => {
  const parsedTime = JSON.parse(createdAt);
  const todoCreatedAt = new Date(parsedTime);

  return (
    <Time>{timeStamp(todoCreatedAt)}</Time>
  );
};

export default TimeStamp;