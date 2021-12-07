import React, { useState } from "react";
import styled from "styled-components/macro";
import { CategoryIcon } from "../components/CategoryIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/pro-light-svg-icons";
import { useDispatch } from "react-redux";
import { todo } from "reducers/todo";
import { screen } from "reducers/screen";
import DatePicker from "react-datepicker";
import { grayColor, mainColor } from "../components/style/colors";
import "react-datepicker/dist/react-datepicker.css";

// Set local states depending on the value from the inputs.
export const AddTodoScreen = () => {
  const [category, setCategory] = useState("business");
  const [todoTitle, setTodoTitle] = useState("");
  const [todoPlace, setTodoPlace] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  // Resets the local state so that the information from adding a todo disappears when it is added.
  const reset = () => {
    setCategory("business");
    setStartDate(new Date());
    setTodoPlace("");
    setTodoTitle("");
  };

  return (
    <NewTodoContainer>
      <GoBackIconHeaderContainer>
        <GoBackIcon
          onClick={() => {
            // Dispatch scrollIntoView to false so it doesn't scroll down.
            dispatch(
              screen.actions.scrollDownToNewitem({ scrollIntoView: false })
            );
            dispatch(screen.actions.currentScreen({ screen: "todoList" }));
          }}
        >
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </GoBackIcon>
        <Header3>Add new todo</Header3>
      </GoBackIconHeaderContainer>
      <ContentContainer>
        <CategoryIcon category={category} completed={false} canClick={false} />
        <Form
          // Dispatch the information on submit to the global state.
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(
              todo.actions.addTodo({
                category: category,
                title: todoTitle,
                place: todoPlace,
                dueDate: startDate.getTime(),
              })
            );
            reset();

            dispatch(screen.actions.currentScreen({ screen: "todoList" }));
            // Dispatch scrollIntoView to true so it scroll to the bottom of the list.
            dispatch(
              screen.actions.scrollDownToNewitem({ scrollIntoView: true })
            );
          }}
        >
          <select
            id="iconCategory"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="business">Business</option>
            <option value="activity">Activity</option>
            <option value="family">Family</option>
          </select>
          <label htmlFor="title" />
          <TodoInput
            maxLength="20"
            id="title"
            name="title"
            placeholder="Activity"
            value={todoTitle}
            onChange={(event) => setTodoTitle(event.target.value)}
            required
          ></TodoInput>
          <label htmlFor="place" />
          <TodoInput
            maxLength="20"
            id="place"
            name="place"
            placeholder="Place"
            value={todoPlace}
            onChange={(event) => setTodoPlace(event.target.value)}
          ></TodoInput>
          <LabelDatepickerContainer>
            <Label htmlFor="dueDate">Due date</Label>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
              }}
              minDate={new Date()}
              showDisabledMonthNavigation
              required
            />
          </LabelDatepickerContainer>
          <SubmitButton type="submit">Add your Todo</SubmitButton>
        </Form>
      </ContentContainer>
    </NewTodoContainer>
  );
};

const NewTodoContainer = styled.section`
  background-color: ${mainColor};
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 20px;
`;

const GoBackIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  cursor: pointer;
  @media (min-width: 1025px) {
    font-size: 40px;
  }
`;

const GoBackIconHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 40px;
`;

const Header3 = styled.h3`
  color: black;
  margin: 0;
  text-align: center;
  @media (min-width: 1025px) {
    font-size: 30px;
  }
`;

const ContentContainer = styled.div`
  padding-top: 20px;
  @media (min-width: 1025px) {
    max-width: 400px;
    margin: auto;
  }
`;

const Form = styled.form`
  padding-top: 20px;
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 10px;
`;

const SubmitButton = styled.button`
  border-radius: 3px;
  background-color: ${grayColor};
  text-transform: uppercase;
  padding: 10px;
  border: 1px solid black;
  letter-spacing: 2px;
  cursor: pointer;
  &:hover {
    background-color: rgba(210, 211, 219, 0.8);
    transition: all 200ms ease-in-out;
  }
`;

const TodoInput = styled.input`
  background-color: ${mainColor};
  border: none;
  border-bottom: ${grayColor} 1px solid;
  padding: 10px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
    letter-spacing: 2px;
    font-size: 15px;
    font-weight: 100;
  }
`;

const Label = styled.label`
  letter-spacing: 2px;
  font-size: 15px;
  color: black;
  padding-left: 10px;
  font-weight: 300;
`;

const LabelDatepickerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin: 6px 0;
`;
