import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Dates from "./Date";
import DeleteAllButton from "./DeleteAllButton";
import CompleteAllButton from "./CompleteAllButton";

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  height: 90px;
  padding: 25px;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;
const HeaderDate = styled.div`
  h1 {
    font-family: "Permanent Marker", cursive;
    text-transform: uppercase;
    font-size: 33px;
    @media (min-width: 768px) {
      font-size: 70px;
      margin-left: 100px;
    }
  }
  display: flex;
  flex-direction: column;
`;
const TasksInfo = styled.div`
  text-align: right;
  height: 80px;
  @media (min-width: 768px) {
    height: 120px;
  }
`;
const TasksAndButtons = styled.div`
  position: absolute;
  right: 20px;
  @media (min-width: 768px) {
    font-size: 30px;
    margin-right: 10%;
    margin-top: 30px;
  }
`;
const Header = () => {
  const items = useSelector((store) => store.todos.items);
  const done = items.filter((item) => item.isComplete);
  const left = items.filter((item) => item.isComplete === false);

  return (
    <HeaderContainer>
      <HeaderDate>
        <h1>Todo-list</h1>
        <Dates />
      </HeaderDate>
      <TasksAndButtons>
        <TasksInfo>
          <p>
            {items.length}{" "}
            {items.length === 0 || items.length > 1 ? " Tasks" : " Task"}
          </p>
          {items.length > 0 && (
            <>
              {left.length > 0 && (
                <p>
                  {left.length}
                  {left.length === 0 || left.length > 1 ? " Tasks" : " Task"} to
                  do
                </p>
              )}
              {done.length > 0 && (
                <p>
                  {done.length}
                  {done.length === 0 || done.length > 1
                    ? " Tasks"
                    : " Task"}{" "}
                  done!
                </p>
              )}
            </>
          )}
        </TasksInfo>

        <CompleteAllButton />
        <DeleteAllButton />
      </TasksAndButtons>
    </HeaderContainer>
  );
};

export default Header;
