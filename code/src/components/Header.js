import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";

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
  margin-bottom: 0;
  text-align: center;
`;
const HeadingThree = styled.h3`
  font-family: "Ranga", cursive;
  font-size: 22px;
  font-weight: 500;
  margin-top: 0;
  text-align: center;
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
  const items = useSelector((store) => store.todos.items);
  const done = items.filter((item) => item.isComplete).length;

  return (
    <header>
      <HeadingOne>To do</HeadingOne>
      <HeadingTwo>
        {weekday} {date}
      </HeadingTwo>
      <HeadingThree>
        Finished:{done}/{items.length}
      </HeadingThree>
    </header>
  );
};

export default Header;
