import React from "react";

const currentDate = () => {
  const todaysDate = new Date();
  const date = todaysDate.getDate();
  const day = todaysDate.getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const month = todaysDate.getMonth();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const daysEndingString = function (date) {
    if (date > 3 && date < 21) return 'th';
    switch (date % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  const currentDay = days[day];
  const currentMonth = months[month];

  return `${currentDay}, ${currentMonth} ${date}${daysEndingString()}`;
};

const DateStamp = () => <p>{currentDate()}</p>;

export default DateStamp;