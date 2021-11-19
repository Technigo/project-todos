import React, { useState } from "react";
import todos from "reducers/todos";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { AmountOfTasks } from "./AmountOfTasks";
import moment from "moment";

const TopPage = styled.div`
  background-color: ${(props) => props.theme.pageBackground};
  width: 270px;
  height: auto;
  text-align: center;
  border-radius: 10px;
  padding-top: 10px;
  margin-top: 10px;

  h1 {
    color: ${(props) => props.theme.titleColor};
  }

  h6 {
    color: ${(props) => props.theme.tasksToComplete};
    margin: 1px;
    margin-bottom: 5px;
  }

  button {
    display: flex;
    cursor: pointer;
    height: auto;
    width: auto;
    font-weight: bold;
    padding: 10px;
    margin-left: 10px;
    border: 1px solid;
    border-radius: 20px;
    background-color: ${(props) => props.theme.buttonBackground};
    color: ${(props) => props.theme.pageBackground};
    transition: all 0.5s ease;
  }

  button:hover {
    cursor: pointer;
    color: white;
    transition: 0.1s;
  }
`;

const Header = (props) => {
  const changeTheme = () => {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  };

  const amount = useSelector((store) => store.todos.length);
  // const amount = useSelector(
  //   (store) => store.todos.filter((item) => item.isComplete).length
  // );

  return (
    <TopPage>
      <button onClick={changeTheme}>Dark/light</button>
      <h1>T O D O :</h1>
      <h6>Today: {moment().format("MMM Do YY")}</h6>

      <AmountOfTasks />
      {/* {amount} */}
    </TopPage>
  );
};

export default Header;
