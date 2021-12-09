import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import logo from "../assets/logo.png";
import backgroundImage from "../assets/background-image.jpg";
import moment from "moment";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-image: url(${backgroundImage});
  box-shadow: inset 0 -9px 15px -10px #f6c05c;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40vh;
  z-index: 1;
  padding: 10px;
`;

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 10px;
`;

const StyledTasksInfo = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: right;
  margin: 0;
  line-height: 4vh;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 992px) {
    font-size: 22px;
  }
`;

const CurrentDate = styled.h3`
  text-align: right;
  margin: 0 0 5px 0;
  @media (min-width: 768px) {
    font-size: 26px;
  }
  @media (min-width: 992px) {
    font-size: 36px;
  }
`;

const AppLogo = styled.img`
  width: 120px;
  height: 120px;
  @media (min-width: 768px) {
    width: 135px;
    height: 135px;
  }
  @media (min-width: 992px) {
    width: 180px;
    height: 180px;
  }
`;

const Header = () => {
  const items = useSelector((store) => {
    return store.todos.items;
  });
  const completedTodos = items.filter((item) => item.isComplete);
  const incompletedTodos = items.filter((item) => !item.isComplete);
  const currentDate = moment().format("Do MMMM YYYY");

  return (
    <StyledHeader>
      <div>
        <AppLogo src={logo} alt="do your dos logo" />
      </div>
      <TasksContainer>
        <CurrentDate>{currentDate}</CurrentDate>
        <StyledTasksInfo>Total: {items.length}</StyledTasksInfo>
        <StyledTasksInfo>Completed: {completedTodos.length}</StyledTasksInfo>
        <StyledTasksInfo>Tasks left: {incompletedTodos.length}</StyledTasksInfo>
      </TasksContainer>
    </StyledHeader>
  );
};

export default Header;
