import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import moment from "moment";

const Header = () => {
  const items = useSelector((store) => store.todos.items);
  const uncomplete = items.length;
  const complete = items.filter((item) => item.isDone).length;

  return (
    <header>
      <h1> Stuff I need to do</h1>
      <h2>But probably don't want to</h2>
      <h5>{moment().format("dddd, Do MMMM")}</h5>
      <h5>
        {complete} / {uncomplete} completed{" "}
      </h5>
    </header>
  );
};

export default Header;
