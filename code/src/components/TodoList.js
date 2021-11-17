import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 300px;
  margin-top: 10px;

  border-top: 1px solid purple;
  &:first-child {
    border: 1px solid black;
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

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  return (
    <>
      {items.map((item) => (
        <Wrapper key={item.id}>
          <SmallWrapper>
            <SmallText>Finish by: {item.date}</SmallText>
            <SmallText>Added: {item.added}</SmallText>
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
        </Wrapper>
      ))}
    </>
  );
};

export default TodoList;
