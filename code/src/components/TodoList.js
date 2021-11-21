import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";

import todos from "../reducers/todos";

import TodoListElements from "./TodoListElements";
import AllDone from "./AllDone";
import FilterOptions from "./FilterOptions";

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  max-width: 300px;
  margin-top: 40px;
  margin-bottom: 0px;
`;

const SmallBtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 15px;
`;
const Button = styled.button`
  position: relative;
  display: inline-block;
  margin: 5px;
  padding: 5px 5px;
  text-align: center;
  font-family: inherit;
  font-size: 12px;
  text-decoration: none;
  color: #725ac1;
  background: rgba(46, 81, 218, 0.3);
  cursor: pointer;
  transition: ease-out 0.5s;
  border-radius: 30px;
  border: 2px solid #725ac1;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 #725ac1;
  height: min-content;
  width: max-content;

  &:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #725ac1;
  }

  &:active {
    transform: scale(0.9);
  }
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
      } else if (filter === "showall" || filter === "") {
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

  const onCheckTodos = (boolean) => {
    if (boolean) dispatch(todos.actions.checkTodos());
    else dispatch(todos.actions.uncheckTodos());
  };

  const returnListItems = () => {
    const prioOne = newItems.filter(
      (item) => item.project === "prio1"
    );
    const prioTwo = newItems.filter(
      (item) => item.project === "prio2"
    );
    const prioThree = newItems.filter(
      (item) => item.project === "prio3"
    );
    const noPrio = newItems.filter(
      (item) => item.project === "" || !item.project
    );

    if (
      prioOne.length ||
      prioTwo.length ||
      prioThree.length ||
      noPrio.length
    ) {
      return (
        <>
          {prioOne && (
            <TodoListElements list={prioOne} heading={"Prio 1"} />
          )}
          {prioTwo && (
            <TodoListElements list={prioTwo} heading={"Prio 2"} />
          )}
          {prioThree && (
            <TodoListElements list={prioThree} heading={"Prio 3"} />
          )}
          {noPrio && (
            <TodoListElements list={noPrio} heading={"No prio"} />
          )}
        </>
      );
    } else {
      return <AllDone />;
    }
  };

  return (
    <>
      <ButtonWrapper>
        <SmallBtnWrap>
          <Button onClick={() => onCheckTodos(true)}>
            Check all
          </Button>

          <Button onClick={() => onCheckTodos(false)}>
            Uncheck all
          </Button>
          <FilterOptions />
        </SmallBtnWrap>
      </ButtonWrapper>
      {returnListItems()}
    </>
  );
};

export default TodoList;
