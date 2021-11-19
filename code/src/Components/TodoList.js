import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

import { todo } from 'reducers/todo';

export const TodoList = () => {
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  //Denna funktionen tar det som är i input statet och skickar till funktionen i the store. tror jag...
  const onAddToDo = () => {
    dispatch(todo.actions.addTodo({ text: input, category: category }));
    setInput('');
  };
  const listWithTodos = useSelector((store) => store.todo.items);
  const onToggle = (index) => {
    dispatch(todo.actions.toggle(index));
  };
  const onDelete = (id) => {
    dispatch(todo.actions.delete(id));
  };

  return (
    <Content>
      <InputField>
        <h1>TodoList</h1>
        <div className="input">
          <div className="inputBox">
            <input
              className="textInput"
              type="text"
              placeholder="write your Todo:"
              onChange={(event) => setInput(event.target.value)}
              value={input}
            />

            <div>
              <label>Category:</label>
              <select
                className="categoryInput"
                name="category"
                onChange={(event) => setCategory(event.target.value)}>
                <option value="Urgent">Urgent</option>
                <option value="Not urgent">Not urgent</option>
                <option value="Fun stuff">Fun stuff</option>
              </select>
            </div>
          </div>

          <InputButton disabled={input.length < 1} onClick={onAddToDo}>
            Add ToDo
          </InputButton>
        </div>
      </InputField>

      <div className="container">
        <h2>You have {listWithTodos.length} Todos left for today.</h2>
        {listWithTodos.map((item, index) => (
          <TheList border={item.category === 'Urgent' ? 'red' : 'green'}>
            <div className="topList">
              <input
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggle(item.id)}></input>
              <p>{item.text}</p>
              <DeleteButton onClick={() => onDelete(index)}>
                Delete
              </DeleteButton>
            </div>
            <div className="bottomList">
              <p>Posted: {moment(item.date).fromNow()}</p>
              <p>Category:{item.category}</p>
            </div>
          </TheList>
        ))}
      </div>
    </Content>
  );
};

const Content = styled.div`
  @media (min-width: 992px) {
    background-color: var(--background);
    border: 5px dotted black;
    min-width: 334px;
    max-width: 500px;
    margin: 0 auto;
    padding: 50px;
  }
`;

const InputField = styled.div`
  background: var(--main-color);

  @media (min-width: 992px) {
    background: none;
  }
  .textInput {
    margin: 5px;
  }

  .categoryInput {
    margin: 5px;
    margin-bottom: 10px;
  }

  .input {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    margin: 10px 0px;

    .inputBox {
    }
    @media (min-width: 992px) {
    }
  }
`;

const InputButton = styled.button`
  border: 1px solid black;
  background-color: var(--main-color);
  color: black;
  width: 100px;
  padding: 8px;
  font-size: 15px;
  border-radius: 4px;

  transition-duration: 0.4s;
  box-shadow: none;
  margin: 10px;
  font-family: var(--button-font);

  &:hover {
    background-color: white;
    color: black;
    transition-duration: 0.4s;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

const TheList = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;

  /* border: 1px solid black; */
  margin: 10px 0px;

  border: 1px solid ${(props) => props.border};

  .topList {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    font-size: 16px;
  }

  .bottomList {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;

    font-style: italic;
    font-size: 12px;
  }

  @media (min-width: 992px) {
  }
`;

const DeleteButton = styled.button`
  background-color: var(--main-color);
  color: black;
  width: 100px;
  padding: 8px;
  font-size: 15px;
  border-radius: 4px;
  border: none;
  transition-duration: 0.4s;
  box-shadow: none;
  margin: 10px;
  font-family: var(--button-font);
  margin-left: auto;

  &:hover {
    background-color: white;
    color: black;
    transition-duration: 0.4s;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
