import React from "react";
import moment from "moment";

const Dates = () => {
  return (
    <>
      {" "}
      <p>{moment().format("MMM Do YY")}</p>
    </>
  );
};
export default Dates;
