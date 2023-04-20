/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import uniqid from 'uniqid';
import { tasks } from 'reducers/tasks';
import { faChevronDown, faChevronUp, faFlag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CompleteAll } from './CompleteAll';
import { DeleteAll } from './DeleteAll';
import { NewToDo } from './NewToDo';

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
  padding: 10px;
  position: relative;
  background-color: pink;
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
export const ListHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  background: pink;
`
export const ListHeaderButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: pink;
  font-weight: 900;
`

export const ListFooter = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  background: #f85f36;
`

export const ButtonsBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
`

export const ToDotext = styled.p`
  margin: 0;
  color: black;
  margin: auto 0;
  font-weight: 700;
`

export const ProjectTitle = styled.h3`
  margin: 0;
  color: #f85f36;
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
  const [listActive, setlistActive] = useState(true);
  const allTasks = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch();

  const onToDoDelete = (index) => {
    dispatch(tasks.actions.deleteItem(index));
  };

  const onToDoToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
    dispatch(tasks.actions.sortItems());
    dispatch(tasks.actions.sortPriority());
  };

  const onTogglePriority = (id) => {
    dispatch(tasks.actions.togglePriority(id));
    dispatch(tasks.actions.sortPriority());
    dispatch(tasks.actions.sortItems());
  };

  useEffect(() => {
    dispatch(tasks.actions.sortItems());
  }, [dispatch]);

  const toggleList = () => {
    setlistActive(!listActive)
  };

  return (
    <>
      <ListHeader>
        <ProjectTitle>My todo list</ProjectTitle>
        <ProjectTitle>Tasks left: 5</ProjectTitle>
        <ListHeaderButton type="button" onClick={toggleList}>
          {listActive ? (
            <FontAwesomeIcon icon={faChevronUp} style={{ color: '#ffffff', fontSize: '30px' }} />)
            : (<FontAwesomeIcon icon={faChevronDown} style={{ color: '#ffffff', fontSize: '30px' }} />)}
        </ListHeaderButton>
      </ListHeader>
      {listActive && (
        <ToDoListWrapper>
          {allTasks.map((todoItem, todoIndex) => (
            <ToDoCard key={uniqid()} priority={todoItem.priority}>
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
                <div>
                  <ToDotext key={todoItem.id}>{todoItem.text}</ToDotext>
                  <ToDotext>Due: </ToDotext>
                </div>
              </ToDoInnerCard>
              <ButtonsBox>
                <ListHeaderButton
                  type="button"
                  onClick={() => onTogglePriority(todoItem.id)}>
                  <FontAwesomeIcon icon={faFlag} style={{ color: todoItem.priority ? '#f85f36' : 'black' }} />
                </ListHeaderButton>
                <DeleteButton
                  type="button"
                  onClick={() => onToDoDelete(todoIndex)}>
                  <span role="img" aria-label="delete">
                    ✖️
                  </span>
                </DeleteButton>
              </ButtonsBox>
            </ToDoCard>
          ))}
          <NewToDo />
          <ListFooter>
            <CompleteAll />
            <DeleteAll />
          </ListFooter>
        </ToDoListWrapper>
      )}
    </>
  )
}
