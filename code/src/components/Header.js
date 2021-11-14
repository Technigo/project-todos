import React from "react";
import styled from "styled-components/macro";
import moment from "moment";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export const Header = () => {
  const date = new Date();
  const percentage = 66;

  return (
    <HeaderContainer>
      <TitleDateContainer>
        <Title>Your Todo's</Title>
        <DateContainer>{moment(date).format(`MMM D, YYYY`)}</DateContainer>
      </TitleDateContainer>
      <HeaderDetailContainer>
        <AmountOfTodos>
          <span>10</span>
          <AmountText>Todo's</AmountText>
        </AmountOfTodos>
        <PercentageContainer>
          <ProgressbarContainer>
            <CircularProgressbar
              value={percentage}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                pathTransitionDuration: 0.5,
                // pathTransition: 'none',

                // Colors
                pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
            ;
          </ProgressbarContainer>
          <span>{percentage}% done</span>
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
  padding: 0 10px 13px 10px;
`;

const AmountOfTodos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const PercentageContainer = styled.div`
  display: grid;
  column-gap: 10px;
  grid-template-columns: auto 1fr;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const AmountText = styled.span`
  margin: 0 0 30px 0;
`;

const ProgressbarContainer = styled.div`
  width: 20px;
  height: 20px;
`;
