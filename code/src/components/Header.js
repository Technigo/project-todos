import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import moment from "moment";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #edac5f;
  box-shadow: 2px 2px 5px gray;
  height: 100px;
  padding: 10px 0px;
`;
const Paragraph = styled.p`
  font-size: 13px;
  margin: 5px 10px;
  color: white;
  text-align: left;
`;
const AlignP = styled.div`
  justify-content: flex-end;
  max-width: fit-content;
`;
const AlignText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 40px;
`;
const HeaderText = styled.h1`
  align-self: flex-start;
  margin: 5px 10px;
  color: white;
  font-weight: 200;
  font-size: 30px;
`;
const SmallHeaderText = styled.h2`
  align-self: flex-start;
  margin: 5px 10px;
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
        <Paragraph>Tasks {items.length} </Paragraph>
        {items.length >= 1 && (
          <>
            <Paragraph>Todo {uncompletedListItems.length}</Paragraph>
            <Paragraph>Completed {completedListItems.length} </Paragraph>
          </>
        )}
      </AlignP>
    </HeaderWrapper>
  );
};
