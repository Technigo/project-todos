import React from "react";
import styled from "styled-components/macro";

const { DateTime } = require("luxon");

const HeadingOne = styled.h1`
  font-family: "Ranga", cursive;
  font-size: 64px;
  font-weight: 400;
  text-shadow: 2.5px 4px 2px rgba(102, 102, 153, 0.5);
  margin-bottom: 5px;
  line-height: 64px;
  text-align: center;
`;

const HeadingTwo = styled.h2`
  font-family: "Ranga", cursive;
  font-size: 28px;
  font-weight: 500;
  margin-top: 0;
`;

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const weekday =
  weekdays[DateTime.now().setZone("Europe/Stockholm").weekday - 1];
const date = DateTime.now()
  .setZone("Europe/Stockholm")
  .toFormat("dd LLL");

const Header = () => {
  return (
    <header>
      <HeadingOne>To do</HeadingOne>
      <HeadingTwo>
        {weekday} {date}
      </HeadingTwo>
    </header>
  );
};

export default Header;
