import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { todo } from 'reducers/todo';

export const TodoList = () => {
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

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
  const onDeleteAll = () => {
    dispatch(todo.actions.deleteAll());
  };

  return (
    <Content>
      <InputField>
        <div className="input">
          <div className="inputBox">
            <input
              className="textInput"
              type="text"
              placeholder="Write your Todo:"
              onChange={(event) => setInput(event.target.value)}
              value={input}
            />

            <div>
              <select
                className="categoryInput"
                name="category"
                default="label"
                onChange={(event) => setCategory(event.target.value)}>
                <option value="value" disabled selected>
                  Category
                </option>
                <option value="Urgent">Urgent</option>
                <option value="Home">Home</option>
                <option value="School">School</option>
                <option value="Shopping">Shopping</option>
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

        <DeleteAllButton
          disabled={listWithTodos.length < 1}
          onClick={onDeleteAll}>
          Delete all
        </DeleteAllButton>

        {listWithTodos.map((item, index) => (
          <TheList border={item.category === 'Urgent' ? 'red' : 'green'}>
            <div className="topList">
              <input
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggle(item.id)}></input>
              <p
                className={
                  item.isComplete ? 'complete-todo' : 'incomplete-todo'
                }>
                {item.text}
              </p>

              <DeleteButton onClick={() => onDelete(index)}>
                {<FontAwesomeIcon icon={faTrash} />}
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
  background-color: var(--background);
  border: 5px dotted black;
  min-width: 334px;
  max-width: 500px;
  margin: 0 auto;
  padding: 10px;
  @media (min-width: 992px) {
    padding 50px;
  }
`;

const InputField = styled.div`
  background: var(--main-color);
  border: 1px solid black;
  margin-top: 0;

  /*  @media (min-width: 992px) {
    background: none;
  } */
  .textInput {
    margin: 5px;
    background-color: var(--main-color);
    border: none;
    border-bottom: 1px solid;
    text-align: center;

    ::placeholder {
      color: black;
      opacity: 1;
    }
  }

  .categoryInput {
    margin: 5px;
    margin-bottom: 10px;
    background-color: var(--main-color);
    border: none;
  }

  .input {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    padding: 15px;

    .inputBox {
    }
    /* @media (min-width: 992px) {
      justify-content: space-between;
    } */
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

const DeleteAllButton = styled.button`
  border: 1px solid black;
  background-color: #f25050;
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

  .complete-todo {
    color: var(--main-color);
    text-decoration: line-through;
    margin: 3px;
  }
  .incomplete-todo {
    text-decoration: none;
  }
`;

const DeleteButton = styled.button`
  background-color: var(--main-color);
  color: black;
  width: 50px;
  padding: 8px;
  font-size: 15px;
  border-radius: 4px;
  border: none;
  transition-duration: 0.4s;
  box-shadow: none;
  margin: 10px;
  margin-left: auto;

  &:hover {
    background-color: white;
    color: black;
    transition-duration: 0.4s;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
