import React from "react";
import moment from "moment";

const Date = () => {
  return <p>{moment().format("MMM Do YY")}</p>;
};
export default Date;
