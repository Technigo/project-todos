/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import uniqid from 'uniqid';
import { tasks } from 'reducers/tasks';
import { CompleteAll } from './CompleteAll';
import { DeleteAll } from './DeleteAll';

export const CheckBox = styled.input`
  width: 1.3em;
  height: 1.3em;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
  outline: none;
  cursor: pointer;
`

export const ToDoCard = styled.div`
  display: flex;
  justify-content: space-between;
  background: pink;
  padding: 10px;
  position: relative;
`

export const ToDoInnerCard = styled.div`
  display: flex;
  gap: 10px;
`

export const ToDoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ToDotext = styled.p`
  margin: 0;
  color: black;
  margin: auto 0;
  font-weight: 700;
`

export const DeleteButton = styled.button`
  cursor: pointer;
  background: transparent;
  outline: none;
  border: none;
`

export const ToDoList = () => {
  const allTasks = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch();

  const onToDoDelete = (index) => {
    dispatch(tasks.actions.deleteItem(index));
  };

  const onToDoToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
    dispatch(tasks.actions.sortItems());
  };

  useEffect(() => {
    dispatch(tasks.actions.sortItems());
  }, [dispatch]);

  return (
    <ToDoListWrapper>
      {allTasks.map((todoItem, todoIndex) => (
        <ToDoCard key={uniqid()}>
          <ToDoInnerCard>
            <div className="container">
              <div className="round">
                <input
                  type="checkbox"
                  id={todoItem.id}
                  name={todoItem.id}
                  checked={todoItem.complete}
                  onChange={() => onToDoToggle(todoItem.id)} />
                <label htmlFor={todoItem.id} />
              </div>
            </div>
            <ToDotext key={todoItem.id}>{todoItem.text}</ToDotext>
          </ToDoInnerCard>
          <DeleteButton
            type="button"
            onClick={() => onToDoDelete(todoIndex)}>
            <span role="img" aria-label="delete">
              ✖️
            </span>
          </DeleteButton>
        </ToDoCard>
      ))}
      <CompleteAll />
      <DeleteAll />
    </ToDoListWrapper>
  )
}
