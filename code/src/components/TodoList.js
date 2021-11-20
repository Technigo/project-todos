import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";

import todos from "../reducers/todos";

import FilterOptions from "./FilterOptions";

const { DateTime } = require("luxon");

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-between;
  height: 80px;
  width: 90%;
  max-width: 300px;
  margin-top: 20px;
  margin-bottom: 0px;
`;

const SmallBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 300px;
  margin-top: 0px;
  border-top: 1px solid purple;

  &:nth-child(2n) {
    background-color: rgba(232, 195, 232, 0.5);
  }

  &:nth-child(2n-1) {
    background-color: rgba(218, 158, 218, 0.5);
  }
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
  margin-top: 0;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SmallWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0;
`;

const SmallText = styled.p`
  font-size: 10px;
  margin-bottom: 0;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Tag = styled.div`
  background: purple;
  color: white;
  padding: 2px;
  width: max-content;
  height: min-content;
  border-radius: 10%;
  margin: 3px;
`;

const TagText = styled.p`
  font-size: 10px;
  margin: 0;
  padding: 0;
`;

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);
  const filter = useSelector((store) => store.todos.filter);
  const [newItems, setNewItems] = useState([]);

  useEffect(() => {
    const filterList = () => {
      if (filter === "checked") {
        setNewItems(items.filter((item) => item.isComplete === true));
      } else if (filter === "unchecked") {
        setNewItems(
          items.filter((item) => item.isComplete === false)
        );
      } else if (filter === "showall") {
        setNewItems(items);
      } else {
        setNewItems(
          items.filter((item) =>
            item.tags.some((tag) => tag.value === filter)
          )
        );
      }
    };
    filterList();
  }, [filter, items]);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  const onCheckTodos = (boolean) => {
    if (boolean) dispatch(todos.actions.checkTodos());
    else dispatch(todos.actions.uncheckTodos());
  };

  const returnListItems = () => {
    newItems.map((item) => (
      <Wrapper key={item.id}>
        <SmallWrapper>
          <SmallText>
            Finish by:{" "}
            {DateTime.fromISO(item.date)
              .setZone("Europe/Stockholm")
              .toFormat("dd LLL yyyy")}
          </SmallText>
          <SmallText>
            Added:{" "}
            {DateTime.fromISO(item.added)
              .setZone("Europe/Stockholm")
              .toFormat("dd LLL yyyy")}
          </SmallText>
        </SmallWrapper>
        <ListItem>
          <FlexRow>
            <input
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
            <p>{item.text}</p>
          </FlexRow>
          <button onClick={() => onDeleteTodo(item.id)}>x</button>
        </ListItem>
        <Tags>
          {" "}
          {item.tags.map((tag) => (
            <Tag key={tag.value}>
              <TagText>{tag.value}</TagText>
            </Tag>
          ))}
        </Tags>
      </Wrapper>
    ));
  };

  return (
    <>
      <ButtonWrapper>
        <SmallBtnWrap>
          <button onClick={() => onCheckTodos(true)}>
            Check all tasks
          </button>
          <button onClick={() => onCheckTodos(false)}>
            Uncheck all tasks
          </button>
        </SmallBtnWrap>
        <FilterOptions />
      </ButtonWrapper>
      {returnListItems()}
    </>
  );
};

export default TodoList;
