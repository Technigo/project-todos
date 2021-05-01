import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { todos } from "../../Reducers/todos";
import { SelectCategory } from "./SelectCategory";
import { SelectDeadline } from "./SelectDeadline";

export const CreateNewTask = () => {
  //variables
  const dispatch = useDispatch();
  const filters = useSelector((store) => store.todos.filters[0]);
  const sort = useSelector((store) => store.todos.sort[0]);
  const cat = useSelector((store) => store.todos.category);
  const currentTime = new Date(Date.now()).toLocaleString();

  //states
  const [newTask, setNewTask] = useState("");
  const [due, setDue] = useState("3030-30-30");
  const [category, setCategory] = useState("");
  const [checked, setChecked] = useState("");
  const [hasDeadline, setHasDeadline] = useState(false);

  //local functions
  const handleClick = () => {
    if (newTask === "") {
      alert("You must add text!");
    } else {
      console.log(due)
      dispatch(
        todos.actions.createNewTodo({
          task: newTask,
          time: currentTime,
          deadline: hasDeadline ? due : "3030-30-30", //setting a very late date on the ones with no dadline to sort properly.
          category: category,
          isTimed: hasDeadline,
          overdue: new Date(due) - new Date(Date.now()) <= 0 ? true : false,
        })
      );
   
      dispatch(todos.actions.categorize( cat ));
      dispatch(
        todos.actions.filterTodos({
          filterBy: filters.filterBy,
          value: filters.value,
        })
      );
      dispatch(
        todos.actions.sortTodos({
          sortBy: sort.sortBy,
          order: sort.order,
        })
      );
      clearAll();
    }
  };

  const clearAll = () => {
    setNewTask("");
    setCategory("");
    setChecked("");
  };

  //render
  return (
    <Section>
      <Container>
        <Header>
          <SelectCategory
            category={category}
            setCategory={setCategory}
            checked={checked}
            setChecked={setChecked}
          />
        </Header>
        <ContainerInner>
          <Button type="button" onClick={() => handleClick()}>
            +
          </Button>
          <Textarea
            placeholder="Add task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </ContainerInner>
        <Footer>
          <SelectDeadline
            due={due}
            setDue={setDue}
            setHasDeadline={setHasDeadline}
          />
        </Footer>
      </Container>
    </Section>
  );
};

//styled components
const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  background: white;

  @media (min-width: 768px) {
    width: 500px;
  }
`;

const Container = styled.div`
  width: 100%;
  box-shadow: 0.5px 0.5px 1px 1px rgb(88, 88, 102);
`;

const Header = styled.div`
  display: flex;
`;

const ContainerInner = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  border-bottom: dashed rgb(196, 232, 241) 0.5px;
  font-size: 20px;
  overflow-y: auto;
  background-color: white;
  width: 100%;
`;

const Button = styled.button`
  margin: 0 10px;
  margin-top: -18px;
  font-size: 30px;
  width: 40px;
  height: 40px;
  border: none;
  color: #ea9085;
  background: rgba(196, 232, 241, 0);
  outline: none;
  cursor: pointer;
`;

const Textarea = styled.textarea`
  width: 100%;
  flex: 1 1 auto;
  border: none;
  font-size: 20px;
  outline: none;
  color: #6e5773;
  padding: 40px 0;

  &::placeholder {
    font-family: "Raleway", sans-serif;
    color: #ea9085;
  }

  &::focus,
  &::hover {
    background-color: #ea9085;
  }
`;

const Footer = styled.div`
  min-height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
