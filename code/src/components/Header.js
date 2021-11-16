import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

export const Header = () => {
  const items = useSelector((store) => store.todos.items);
  const completedListItems = items.filter((listItem) => listItem.isComplete);
  const uncompletedListItems = items.filter((listItem) => !listItem.isComplete);

  const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: #edac5f;
    box-shadow: 2px 2px 5px gray;
  `;
  const Paragraph = styled.p`
    font-size: 15px;
    margin: 5px 20px;
    color: white;
  `;
  const AlignP = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;

  return (
    <Header>
      <p>Todo</p>
      <AlignP>
        <Paragraph>Tasks left to do: {uncompletedListItems.length}</Paragraph>
        <Paragraph>Completed tasks: {completedListItems.length} </Paragraph>
        <Paragraph>Tasks total: {items.length} </Paragraph>
      </AlignP>
    </Header>
  );
};
