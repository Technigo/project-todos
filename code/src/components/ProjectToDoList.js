/* eslint-disable */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addList, addItem, toggleItem, togglePriority, deleteItem, sortItems, sortPriority, deleteList } from 'reducers/tasksproject';
import uniqid from 'uniqid';
import styled from 'styled-components'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { compareAsc } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faPlus, faFlag } from '@fortawesome/free-solid-svg-icons'
import { TextInput, ListHeader, ListHeaderButton, ProjectTitle, AddNewProjectContainer, AddButton, AddButton2, ProjectNameInput, ProjectNameContainer, ToDoForm, ToDoListWrapper, ToDoCard, ToDoInnerCard, ToDotext, ButtonsBox, DeleteButton } from './style/GlobalStyle';

export const ProjectToDoList = () => {
  const [projectCreated, setProjectCreated] = useState(false);
  const [listNameCreated, setListNameCreated] = useState(false);
  const [listName, setListName] = useState('');
  const [itemName, setItemName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [projectActive, setProjectActive] = useState(true);

  const lists = useSelector((state) => state.tasksproject.lists);

  const dispatch = useDispatch();

  const handleAddList = () => {
    dispatch(addList({ name: listName }));
    setListName('');
    setListNameCreated(true)
    console.log(listName)
    console.log(projectCreated)
    setProjectCreated(false)
  };

  const handleAddItem = (listIndex) => {
    const newToDo = {
      id: uniqid(),
      text: itemName[listIndex].charAt(0).toUpperCase() + itemName[listIndex].slice(1),
      due: dueDate ? dueDate.toDateString() : '-',
      complete: false,
      priority: false
    };
    dispatch(addItem({ listIndex, item: newToDo }));
    setItemName('');
  };

  const handleWantNewProject = () => {
    !projectCreated ? setProjectCreated(true) : setProjectCreated(!projectCreated)
  };

  const handleItemNameChange = (listIndex, value) => {
    setItemName({ ...itemName, [listIndex]: value });
  }

  const handleProjectClick = (listIndex) => {
    setProjectActive((prevProjectActive) => ({
      ...prevProjectActive,
      [listIndex]: !prevProjectActive[listIndex],
    }));
  };

  const onToDoToggle = (id, listIndex) => {
    dispatch(toggleItem({ listIndex, itemId: id }));
    dispatch(sortItems({ listIndex }));
    dispatch(sortPriority({ listIndex }));
  };

  const onTogglePriority = (id, listIndex) => {
    dispatch(togglePriority({ listIndex, itemId: id }));
    dispatch(sortPriority({ listIndex }));
    dispatch(sortItems({ listIndex }));
  };

  const onToDoDelete = (id, listIndex) => {
    dispatch(deleteItem({ listIndex, itemId: id }));
  };

  const deleteListByName = (list) => {
    dispatch(deleteList({ name: list.name }));
  }

  const completed = lists.filter((task) => task.complete);
  

  return (
    <>
      {listNameCreated && (
        <div>
          {Array.isArray(lists) && lists.map((list, listIndex) => (
            <>
              <ListHeader key={list.name}>
                <button
                  type="button"
                  onClick={() => deleteListByName(list)}>
                  Delete List
                </button>
                <ProjectTitle>{list.name}</ProjectTitle>
                <p>{completed.length}/ {list.items.length} done</p>
                <ListHeaderButton type="button" onClick={() => handleProjectClick(listIndex)}>
                  {projectActive[listIndex] ? (
                  <FontAwesomeIcon icon={faChevronUp} style={{ color: '#ffffff', fontSize: '30px'}} />)
                  : (<FontAwesomeIcon icon={faChevronDown} style={{ color: '#ffffff', fontSize: '30px'}} />)}
                </ListHeaderButton>
              </ListHeader>
            {projectActive[listIndex] && (
            <>
              <ToDoListWrapper>
                {list.items.map((item) => (
                  <ToDoCard key={item.text}>
                    <ToDoInnerCard>
                      <div className="container">
                        <div className="round">
                          <input
                            type="checkbox"
                            id={item.id}
                            name={item.id}
                            checked={item.complete}
                            onChange={() => onToDoToggle(item.id, listIndex)} />
                          <label htmlFor={item.id} />
                        </div>
                      </div>
                      <div>
                        <ToDotext key={item.id}>{item.text}</ToDotext>
                        <ToDotext>{compareAsc(new Date(item.due), Date.now()) === -1 ? 'overdue' : `due: ${item.due}`}</ToDotext>
                      </div>
                    </ToDoInnerCard>
                    <ButtonsBox>
                      <ListHeaderButton
                        type="button"
                        onClick={() => onTogglePriority(item.id, listIndex)}>
                        <FontAwesomeIcon icon={faFlag} style={{ color: item.priority ? '#f85f36' : '#464646' }} />
                      </ListHeaderButton>
                      <DeleteButton
                        type="button"
                        onClick={() => onToDoDelete(item.id, listIndex)}>
                        <span role="img" aria-label="delete">
                          ✖️
                        </span>
                      </DeleteButton>
                    </ButtonsBox>
                  </ToDoCard>
                ))}
              </ToDoListWrapper>
                  <ToDoForm key={listIndex}>
                    <label htmlFor="projecttodo">
                      <TextInput
                        type="text"
                        name="projecttodo"
                        value={itemName[listIndex] || ''}
                        onChange={(e) => handleItemNameChange(listIndex, e.target.value)} />
                    </label>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <DatePicker
                          id="datePicker"
                          selected={dueDate}
                          onChange={(date) => setDueDate(date)}
                          placeholderText="Due"
                          dateFormat="yyyy-MM-dd" />
                      </div>
                      <button
                        className="submit-button"
                        type="button"
                        onClick={() => handleAddItem(listIndex)}>
                        ADD TODO
                      </button>
                    </div>
                  </ToDoForm>
              </>
              )}
            </>
          ))}
        </div>)}
      {projectCreated && (
        <ProjectNameContainer>
          <ProjectNameInput
          type="text"
          value={listName}
          placeholder='Your project name...'
          onChange={(e) => setListName(e.target.value)} />
          <AddButton2
            type="button"
            onClick={handleAddList}>
            <FontAwesomeIcon icon={faPlus} style={{ color: '#464646' }} />
          </AddButton2>
        </ProjectNameContainer>)}
      <AddNewProjectContainer>
        <AddButton
          type="button"
          onClick={handleWantNewProject}>
          <p style={{ color: '#f85f36' }}>create new project</p>
          <FontAwesomeIcon icon={faPlus} />
        </AddButton>
      </AddNewProjectContainer>
    </>
  );
}
