import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { todos } from "../../Reducers/todos";
import { SelectCategory } from "./SelectCategory";
import { SelectDeadline } from "./SelectDeadline";

export const CreateNewTask = () => {
  //variables
  const dispatch = useDispatch();
  const currentTime = new Date(Date.now()).toLocaleString();
  //states
  const [newTask, setNewTask] = useState("");
  const [due, setDue] = useState("");
  const [category, setCategory] = useState("")
  const [checked, setChecked] = useState("")

  //local functions
  const handleClick = () => {
    if (newTask === "") {
      alert("You must add text!");
    } else {
      dispatch(
        todos.actions.createNewTodo({
          task: newTask,
          time: currentTime,
          deadline: due,
          category: category,
        })
      );
      clearAll();
      dispatch(todos.actions.categorize({ categorizeBy: "all" }))   
      dispatch(todos.actions.filterBy({type: "byCategory", value: "all"}))
    }
  };

  const clearAll = () => {
    setNewTask("");
    setCategory("");
    setChecked("");
  }

  //render
  return (
    <Section>
      <Container>
        <Header>
          <SelectCategory  
            category={category}
            setCategory={setCategory}
            checked={checked}
            setChecked={setChecked}/>
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
            <SelectDeadline due={due} setDue={setDue} />
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
`

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
  color: rgb(196, 232, 241);
  background-color: rgba(196, 232, 241, 0);
  outline: none;
`;

const Textarea = styled.textarea`
  width: 100%;
  flex: 1 1 auto;
  border: none;
  font-size: 20px;
  outline: none;
  color: rgb(40, 91, 104);
  padding: 40px 0;

  &::placeholder {
    font-family: "Raleway", sans-serif;
    color: rgb(196, 232, 241);
  }

  &::focus,
  &::hover {
    background-color: rgb(196, 232, 241);
  }
`;

const Footer = styled.div`
min-height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
