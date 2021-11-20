import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";

import todos from "../reducers/todos";

import FilterOptions from "./FilterOptions";
import TodoListElements from "./TodoListElements";

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

    console.log("No prio list: ", noPrio);

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
