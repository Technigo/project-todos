import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";

import todos from "../reducers/todos";

const { DateTime } = require("luxon");

const HeadingTwo = styled.h2`
  font-family: "Ranga", cursive;
  font-size: 28px;
  line-height: 28px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-right: 10px;
  text-align: center;
`;

const HeadingThree = styled.h3`
  font-family: "Ranga", cursive;
  font-size: 22px;
  line-height: 28px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 300px;
  margin-top: 0px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  &:nth-child(2n-1) {
    background-color: ${(prop) =>
      prop.heading === "Prio 1"
        ? "rgba(203, 155, 237, 0.5)"
        : prop.heading === "Prio 2"
        ? "rgba(155, 183, 211, 0.5)"
        : prop.heading === "Prio 3"
        ? "rgba(237, 203, 155, 0.5)"
        : "rgba(162, 162, 97, 0.5)"};
  }

  &:nth-child(2n) {
    background-color: ${(prop) =>
      prop.heading === "Prio 1"
        ? "rgba(151, 55, 219, 0.5)"
        : prop.heading === "Prio 2"
        ? "rgba(72, 114, 157, 0.5)"
        : prop.heading === "Prio 3"
        ? "rgba(218, 146, 46, 0.5)"
        : "beige"};
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
  align-items: center;
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

const TodoListElements = ({ list, heading }) => {
  const dispatch = useDispatch();
  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  const checkList = () => {
    if (
      list.filter((item) => item.isComplete).length === list.length
    ) {
      return "All done!";
    } else return "Some tasks left...";
  };

  if (list.length) {
    return (
      <>
        <Tags>
          <HeadingTwo>{heading}</HeadingTwo>
          <HeadingThree>{checkList()}</HeadingThree>
        </Tags>
        {list.map((item) => (
          <Wrapper key={item.id} heading={heading}>
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
        ))}
      </>
    );
  } else return null;
};

export default TodoListElements;
