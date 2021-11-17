import React, { useState } from "react";
import todos from "reducers/todos";
import styled from "styled-components";
import { GlobalStyles } from "./global";
import { useSelector } from "react-redux";

const TopPage = styled.div`
  background-color: ${(props) => props.theme.pageBackground};
  width: 270px;
  height: auto;
  text-align: center;
  border-radius: 10px;

  h1 {
    color: ${(props) => props.theme.titleColor};
    padding-top: 30px;
  }

  p {
    color: ${(props) => props.theme.tasksToComplete};
  }

  button {
    display: flex;
    cursor: pointer;
    height: auto;
    width: auto;
    padding: 10px;
    margin-top: 10px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.titleColor};
    color: ${(props) => props.theme.pageBackground};
    transition: all 0.5s ease;
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

  // const [theme, setTheme] = useState("light");

  // const amount = useSelector(store => store.todos.length)
  // const amount = useSelector(store => store.todos.filter(item => item.isComplete).length)

  return (
    <TopPage>
      <button onClick={changeTheme}>Dark/light</button>
      <h1>T O D O :</h1>
      <p>you have this many tasks to complete</p>
      {/* {amount} */}
    </TopPage>
  );
};

export default Header;
