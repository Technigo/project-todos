/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import uniqid from 'uniqid';
import { tasks } from 'reducers/tasks';
import { faChevronDown, faChevronUp, faFlag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { compareAsc } from 'date-fns'
import { CompleteAll } from './CompleteAll';
import { DeleteAll } from './DeleteAll';
import { NewToDo } from './NewToDo';
import { TaskCounter } from './TaskCounter'
import { ToDoCard, ToDoInnerCard, ToDoListWrapper, ListHeader, ListHeaderButton, ListFooter, ButtonsBox, ToDotext, ProjectTitle, DeleteButton, ProjectWrapper } from './style/GlobalStyle';

export const ToDoList = () => {
  const [listActive, setlistActive] = useState(false);
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
    dispatch(tasks.actions.sortPriority());
    dispatch(tasks.actions.sortItems());
  }, [dispatch]);

  const toggleList = () => {
    setlistActive(!listActive)
  };

  return (
    <ProjectWrapper>
      <ListHeader>
        <ProjectTitle>My to do list</ProjectTitle>
        <TaskCounter />
        <ListHeaderButton type="button" onClick={toggleList}>
          {listActive ? (
            <FontAwesomeIcon icon={faChevronUp} style={{ color: '#f85f36', fontSize: '25px' }} />)
            : (<FontAwesomeIcon icon={faChevronDown} style={{ color: '#f85f36', fontSize: '25px' }} />)}
        </ListHeaderButton>
      </ListHeader>
      {listActive && (
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
                <div>
                  <ToDotext key={todoItem.id}>{todoItem.text}</ToDotext>
                  <ToDotext>{compareAsc(new Date(todoItem.due), Date.now()) === -1 ? 'overdue' : `due: ${todoItem.due}`}</ToDotext>
                </div>
              </ToDoInnerCard>
              <ButtonsBox>
                <ListHeaderButton
                  type="button"
                  onClick={() => onTogglePriority(todoItem.id)}>
                  <FontAwesomeIcon icon={faFlag} style={{ color: todoItem.priority ? '#f85f36' : '#464646' }} />
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
    </ProjectWrapper>
  )
}
