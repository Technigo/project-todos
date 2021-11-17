import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import moment from "moment";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  background-color: #edac5f;
  box-shadow: 2px 2px 5px gray;
  height: 100px;
`;
const Paragraph = styled.p`
  font-size: 13px;
  margin: 5px 20px;
  color: white;
`;
const AlignP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const AlignText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;
const HeaderText = styled.h1`
  align-self: flex-start;
  margin: 10px 10px;
  color: white;
  font-weight: 200;
  font-size: 20px;
`;
const SmallHeaderText = styled.h1`
  align-self: flex-start;
  margin: 10px 10px;
  color: white;
  font-weight: 200;
  font-size: 15px;
`;

export const Header = () => {
  const items = useSelector((store) => store.todos.items);
  const completedListItems = items.filter((listItem) => listItem.isComplete);
  const uncompletedListItems = items.filter((listItem) => !listItem.isComplete);
  const todaysDate = moment().format("DD MMMM");
  return (
    <HeaderWrapper>
      <AlignText>
        <HeaderText>Todo</HeaderText>
        <SmallHeaderText>{todaysDate}</SmallHeaderText>
      </AlignText>
      <AlignP>
        <Paragraph>Tasks left to do: {uncompletedListItems.length}</Paragraph>
        <Paragraph>Completed tasks: {completedListItems.length} </Paragraph>
        <Paragraph>Tasks total: {items.length} </Paragraph>
      </AlignP>
    </HeaderWrapper>
  );
};
