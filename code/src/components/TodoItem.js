import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import moment from "moment";

import { todos } from "../reducers/todos";
import { CustomCheckbox } from "./CustomCheckbox";

export const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  //const items = useSelector(store => store.todos.items);

  const handleCheckboxClick = isComplete => {
    dispatch(todos.actions.toggleIsComplete(item.id));
  };

  return (
    <>
      <ItemContainer>
        <label htmlFor="is-task-complete"></label>
        {/*} <input
        id="is-task-complete"
        type="checkbox"
        checked={item.isComplete}
        onChange={() => handleCheckboxClick(item.isComplete)}
  /> */}
        <CustomCheckbox
          isChecked={item.isComplete}
          onChangeHandler={() => handleCheckboxClick(item.isComplete)}
        />
        <TodoText>{item.text} </TodoText>
        <Span>{item.isComplete ? "Completed" : "To-Do"}</Span>
        <DateStamp>
          Created: {moment(item.createdDate).format("ddd Do MMM")}
        </DateStamp>
      </ItemContainer>
    </>
  );
};

const ItemContainer = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  margin: 4px 0;
  font-size: 16px;
  background-color: #fff;
  position: relative;
`;

const TodoText = styled.p`
  margin-left: 10px;
  font-weight: 500;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const Span = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #0075ff;
  position: absolute;
  right: 10px;

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

const DateStamp = styled.p`
  font-size: 12px;
  position: absolute;
  bottom: 0;
  left: 35px;
  margin: 0;
  color: #b3b2b2;
`;
