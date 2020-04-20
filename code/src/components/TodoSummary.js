import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todos } from "reducers/todos";
import styled from "styled-components";
import swal from "sweetalert";
import { Button } from "lib/Button";

export const TodoSummary = () => {
  const list = useSelector((store) => store.todos.list);
  const doneList = list.items.filter((item) => item.done);
  const dispatch = useDispatch();
  const [trueOrFalse, setTrueOrFalse] = useState(false);

  const onRemoveClicked = (event) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover your todo's",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(todos.actions.removeAllTodos());
        swal("1, 2, 3! Your todo's are now todont's", {
          icon: "success",
        });
      } else {
        swal("Phew!", "Your todo's are safe!");
      }
    });
  };

  const setAll = (event) => {
    if (!trueOrFalse) {
      setTrueOrFalse(!trueOrFalse);
      dispatch(todos.actions.setAll());
    } else {
      setTrueOrFalse(!trueOrFalse);
      dispatch(todos.actions.unSetAll());
    }
  };

  const filterActive = (event) => {
    dispatch(todos.actions.filterActive());
  };

  const filterComplete = (event) => {
    dispatch(todos.actions.filterComplete());
  };

  const displayAll = (event) => {
    dispatch(todos.actions.displayAll());
  };

  return (
    <SummaryWrapper>
      {list.items.length !== 0 && (
        <TaskCount>
          {doneList.length}/{list.items.length} tasks done!
        </TaskCount>
      )}
      {list.items.length === 0 && (
        <GettingStarted>Time to write some tasks!</GettingStarted>
      )}
      <Wrapper>
        {list.items.length > 1 && (
          <Button onClick={onRemoveClicked}>REMOVE ALL</Button>
        )}
        {list.items.length > 1 && (
          <Button onClick={setAll}>
            {trueOrFalse ? "UNCHECK ALL" : "CHECK ALL"}
          </Button>
        )}
      </Wrapper>
      <Wrapper>
        {list.items.length > 1 && (
          <Button onClick={filterActive}>ACTIVE</Button>
        )}
        {list.items.length > 1 && (
          <Button onClick={filterComplete}>COMPLETE</Button>
        )}
        {list.items.length > 1 && (
          <Button onClick={displayAll}>ALL TASKS</Button>
        )}
      </Wrapper>
    </SummaryWrapper>
  );
};

const TaskCount = styled.h2`
  font-family: "Pangolin", cursive;
  text-align: center;
  color: #fff;
  font-weight: lighter;
`;

const GettingStarted = styled.h2`
  font-family: "Pangolin", cursive;
  text-align: center;
  color: #fff;
  font-weight: lighter;
  font-size: 34px;
  margin: 0;
  display: flex;
  justify-self: flex-end;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 10px;
`;

const SummaryWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`;
