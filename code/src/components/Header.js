import React from "react";
import styled from "styled-components/macro";
import moment from "moment";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useSelector } from "react-redux";

export const Header = () => {
  const date = new Date();
  const todoList = useSelector((store) => store.todo.todos);
  const completedList = todoList.filter((todo) => todo.completed);

  const getPercentage = () => {
    if (completedList.length === 0) {
      return 0;
    } else if (todoList.length === 0) {
      return 0;
    } else {
      return Math.round((completedList.length / todoList.length) * 100);
    }
  };

  return (
    <HeaderContainer>
      <TitleDateContainer>
        <Title>Your Todo's</Title>
        <DateContainer>{moment(date).format(`MMM D, YYYY`)}</DateContainer>
      </TitleDateContainer>
      <HeaderDetailContainer>
        <AmountOfTodos>
          <AmountNumber>{todoList.length}</AmountNumber>
          <AmountText>Total</AmountText>
        </AmountOfTodos>
        <AmountOfTodos>
          <AmountNumber>{completedList.length}</AmountNumber>
          <AmountText>Done</AmountText>
        </AmountOfTodos>

        <PercentageContainer>
          <ProgressbarContainer>
            <CircularProgressbar
              value={getPercentage()}
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: "butt",
                pathTransition: "none",
                pathColor: `#d98a60`,
                trailColor: `#fcf4f0`,
              })}
            />
          </ProgressbarContainer>
          <PercentageText>{getPercentage()}%</PercentageText>
        </PercentageContainer>
      </HeaderDetailContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  height: 35vh;
  width: 100%;
  background-image: url("./pictures/HeaderPicture.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -1;
  display: grid;
  grid-template-columns: 1fr auto;
  color: white;
`;

const TitleDateContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  border-bottom: 3px #d98a60 solid;
`;

const Title = styled.h1`
  margin: 65px 0 10px 10px;
`;

const DateContainer = styled.span`
  margin: 0 0 10px 10px;
`;

const HeaderDetailContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  background-color: rgb(0, 0, 0, 0.3);
  padding: 0 10px 0px 10px;
  min-width: 110px;
`;

const AmountNumber = styled.span`
  font-size: 30px;
`;

const AmountOfTodos = styled.div`
  margin: 0 30px 0 0;
  display: grid;
  grid-template-rows: 1fr auto auto;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
`;

const PercentageContainer = styled.div`
  display: grid;
  justify-content: center;
  column-gap: 10px;
  grid-template-columns: auto auto;
  align-items: center;
  margin-bottom: 13px;
  margin-top: 10px;
`;

const AmountText = styled.span`
  color: rgb(255, 255, 255, 0.5);
`;

const ProgressbarContainer = styled.div`
  width: 20px;
  height: 20px;
`;

const PercentageText = styled.span`
  font-size: 20px;
`;
