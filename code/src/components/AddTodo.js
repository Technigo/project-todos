import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import todo from 'reducers/todo';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const TodoInput = styled.input`
  width: 90%;
  margin: 0;
  margin-bottom: 10px;
  padding: 5px;
  height: 38px;
  border: none;
  border-bottom: 1px solid rgb(50, 78, 168);
  border-radius: 4px;
  font-size: 20px;
  &::placeholder {
    color: rgb(50, 78, 168);
    padding-left: 5px;
  }
  @media (min-width: 1025px) {
    width: 40vw;
    margin-left: 15px;
  }
`;

const TodoWrapper = styled.form`
  padding-top: 20px;
  text-align: center;
  margin-top: 40px;
`;

const RemoveBtn = styled.button`
  margin: 10px 10px 0px 0px;
  position: absolute;
  right: 0;
  background-color: rgb(50, 78, 168);
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-size: 15px;
  font-weight: bold;
  border-radius: 50px;
  padding: 10px;
  border: none;
  transition: transform 0.2s;
  @media (min-width: 768px) {
    position: absolute;
    right: 40%;
    left: 40%;
    &:hover {
      transform: scale(1.1);
    }
  }
  @media (min-width: 1025px) {
    right: 45%;
    left: 45%;
  }
`;

const AddBtn = styled.button`
  background-color: transparent;
  border: none;
  transition: transform 0.2s;
  @media (min-width: 1025px) {
    margin-left: 20px;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const RemoveWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const AddTodo = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();

  const onTodoText = (event) => {
    event.preventDefault();
    dispatch(todo.actions.addTodo({ newTodo }));
    setNewTodo('');
  };

  return (
    <>
      <RemoveWrapper>
        <RemoveBtn onClick={() => dispatch(todo.actions.deleteAllTasks(todo))}>
          remove all
        </RemoveBtn>
      </RemoveWrapper>
      <TodoWrapper onSubmit={onTodoText}>
        <TodoInput
          type='text'
          placeholder='Add your todo..'
          minLength='3'
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
          required
        />
        <AddBtn>
          <FontAwesomeIcon
            onClick={onTodoText}
            icon={faCirclePlus}
            size='3x'
            color='rgb(50, 78, 168)'
          />
        </AddBtn>
      </TodoWrapper>
    </>
  );
};

export default AddTodo;
