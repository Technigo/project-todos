import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { listSlice } from "reducers/listSlice";
import styled from "styled-components";

const HeaderStyled = styled.header`
  box-sizing: border-box;
  padding: 10px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 0.75fr;
  align-items: center;
  color: white;
  background-color: rgb(1, 51, 51);
`;

const HeaderText = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 32px;
	font-weight: 600;
  align-self: flex-end;
`;

const TaskNumber = styled.p`
  padding: 0;
  margin: 0;
  font-size: 18px;
  align-self: flex-start;
`;

const ResetButton = styled.button`
  justify-self: flex-end;
  align-self: flex-end;
  color: white;
  background-color: inherit;
  border: 2px white solid;
  border-radius: 5px;
  font-weight: bolder;
  margin: 0;
  padding: 5px 10px;
  width: 88px;
  cursor: pointer;

  &:hover {
    color: rgb(0, 51, 51);
    font-weight: bolder;
    background-color: white;
    transition: ease-in 0.2s;
  }
`;

const Header = () => {
  const tasks = useSelector((store) => store.listSlice.items);
  const completedTasks = useSelector((store) =>
    store.listSlice.items.filter((item) => item.isDone)
  );
  const dispatch = useDispatch();

  return (
    <HeaderStyled>
      <HeaderText>To do</HeaderText>
      <ResetButton
        type="button"
        onClick={() => {
          dispatch(listSlice.actions.resetList());
        }}
      >
        Clear list
      </ResetButton>
      {tasks.length > 0 && (
        <TaskNumber>
          {completedTasks.length} of {tasks.length} tasks complete
        </TaskNumber>
      )}
    </HeaderStyled>
  );
};

export default Header;
