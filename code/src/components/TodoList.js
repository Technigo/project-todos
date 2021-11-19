import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import moment from "moment";

import todos from "../reducers/todos";
import AddTodo from "./AddTodo";
import Header from "./Header";

const TodoForm = styled.form`
  position: relative;
  display: flex;
  margin: 20px;
  padding: 10px;
  border-bottom: 1px solid pink;
  min-height: 30px;
  width: 200px;
  margin: 20px auto;
  text-align: center;
  align-items: center;

  @media (min-width: 768px) {
    min-height: 40px;
    width: 400px;
  }

  p {
    overflow-wrap: break-word;
    max-width: 130px;
    font-size: 15px;
    text-transform: uppercase;
    @media (min-width: 768px) {
      max-width: 310px;
      font-size: 18px;
    }
  }
`;
const ButtonTrash = styled.button`
  position: absolute;
  display: flex;
  right: 7px;
  font-size: 22px;
  font-weight: bold;
  border: none;
  color: #cf7b7b;
  background-color: rgba(235, 227, 227, 1);
  margin-top: auto;

  &:hover {
    color: red;
  }
`;
const Label = styled.label`
display: flex;
  margin-top: auto;
  position: absolute;
  right: 40px;
  
  
  ${(props) =>
    props.complete === true
      ? `text-decoration: line-through`
      : `text-decoration: none`}

}

  
  
  
  input[type="checkbox"] {
    margin-left: 10px;
    appearance: none;
    /*Showing the square*/
    font: inherit;
    color: #cf7b7b;
    width: 25px;
    height: 25px;
    border: 2px solid currentColor;
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
    
    &:hover {
      color: lightgreen;
    }

    }
  
  /*Before shecked*/
  input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(1);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
    
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }
   
     
  

  input[type="checkbox"]:checked::before {
    transform: scale(1);
    background-color: lightgreen;
    color: lightgreen;
    label{
    text-decoration: line-through;
 }

`;
const Block = styled.section`
  padding: 30px;
  min-height: 300px;
  background-color: rgba(235, 227, 227, 1);
  margin: 10px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  @media (min-width: 768px) {
    width: 750px;
    margin: 100px auto;
  }
`;
const H1 = styled.h1`
  margin: 30px;
`;

const Time = styled.p`
  font-size: 10px !important;
  width: 30px;
  position: absolute;
  margin-left: -38px;
  @media (min-width: 768px) {
    width: 55px;
    font-size: 17px !important;
  }
`;

const Images = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
`;
const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodoImmutability = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  return (
    <>
      <Header />
      <Block>
        <AddTodo />

        {items.length === 0 && (
          <>
            <H1 className="emptyList">Nothing to do</H1>
            <Images
              src="https://cdn-icons.flaticon.com/png/512/3037/premium/3037869.png?token=exp=1637333559~hmac=1b6ce30e58b175595387588414116090"
              alt="yoga"
            ></Images>
          </>
        )}
        {items.map((item) => (
          <TodoForm key={item.id}>
            <Label complete={item.isComplete}>
              <p>{item.text}</p>

              <input
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggleTodo(item.id)}
              />
            </Label>

            <ButtonTrash onClick={() => onDeleteTodoImmutability(item.id)}>
              <i className="far fa-trash-alt"></i>
            </ButtonTrash>
            <Time>{moment(item.createdAt).calendar()}</Time>
          </TodoForm>
        ))}
      </Block>
    </>
  );
};

export default TodoList;
