import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import moment from "moment";

import todo from "reducers/todo";

const OuterHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: #f2f2f2;
  border-bottom: 1px solid #d9d9d9;
  padding: 10px;
  width: 280px;

  @media (min-width: 768px) {
    width: 480px;
    margin: 0 auto;
  }

  @media (min-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 500px;
    width: 200px;
    margin: 0;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    margin-bottom: 40px;
  }
`;

const Header = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  padding-bottom: 5px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

const StyledDate = styled.div`
  font-size: 14px;
  color: #808080;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 992px) {
    width: 150px;
`;

const RemoveButton = styled.div`
  font-size: 10px;
  color: white;
  padding: 2px;
  background-color: #3385ff;
  border-radius: 5px;
  margin-top: 3px;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    font-size: 12px;
    padding: 3px;
    border-radius: 7px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const AddTodo = () => {
  const dispatch = useDispatch();

  const onRemoveAll = () => {
    dispatch(todo.actions.removeAll());
  };

  const onCompleteAll = () => {
    dispatch(todo.actions.completeAll());
  };
  const taskQuantity = useSelector((store) => store.todo.list.length);

  const date = moment().format("MMMM Do");

  return (
    <OuterHeaderContainer>
      <HeaderContainer>
        <Header>Todo</Header>
        <StyledDate>{date}</StyledDate>
      </HeaderContainer>
      <HeaderContainer>
        {!taskQuantity
          ? ""
          : [
              taskQuantity === 1
                ? taskQuantity + "task"
                : taskQuantity + "tasks",
            ]}
        <RemoveButton onClick={onRemoveAll}>Clear all</RemoveButton>
        <RemoveButton onClick={onCompleteAll}>Check all</RemoveButton>
      </HeaderContainer>
    </OuterHeaderContainer>
  );
};

export default AddTodo;
