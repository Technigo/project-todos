import React from "react";
import moment from "moment";

export const Date = () => {
  const todaysDate = moment(Date.now).format("MMM Do YYYY");

  return <h3 className="todays-date">{todaysDate}</h3>;
};
