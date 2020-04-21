import React from "react";
import moment from "moment";

import { useDispatch } from "react-redux";
import { tasks } from "../reducers/tasks";

import styled from "styled-components";
import { ButtonClear } from "../lib/Button";

export const Header = () => {
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(tasks.actions.removeAllTasks());
  };

  return (
    <Container>
      <ContainerLeft>
        <HeaderText> My Things To do </HeaderText>
        <DateText>{moment().format("MMMM Do, Y")}</DateText>
      </ContainerLeft>
      <ContainerRight>
        <ContainerButton>
          <ButtonClear onClick={handleClearList}>CLEAR LIST</ButtonClear>
        </ContainerButton>
      </ContainerRight>
    </Container>
  );
};

// Clear all to dos in list

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #46539e;
  padding: 20px;
  /* color: white; */
  margin: 0;
`;

const ContainerLeft = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 120px;
  width: 150px;
`;
const ContainerRight = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 100px;
`;

const ContainerButton = styled.div`
  margin-top: 90px;
`;
const DateText = styled.text`
  font-size: 12px;
  font-weight: 200;
  color: #efebe9;
  margin: 0;
`;

const HeaderText = styled.p`
  font-size: 34px;
  font-weight: 200;
  color: #efebe9;
  margin: 0px 0px 5px 0px;
`;
