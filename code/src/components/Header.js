import React from "react";

import moment from "moment";

const Header = () => {
  return (
    <div>
      <h1>Eddie's todos</h1>
      <p className="date-today">{moment().format("dddd")}</p>
      <p className="time-today"> {moment().format("HH:mm")} </p>
    </div>
  );
};

export default Header;
