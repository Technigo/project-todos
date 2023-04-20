/* eslint-disable */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addList, addItem } from 'reducers/tasksproject';
import uniqid from 'uniqid';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

export const TextInput = styled.input`
  background: #FFFFFF;
  border: 2px solid pink;
  outline: none;
  border-radius: 8px;
  height: 48px;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 15px;
  font-size: 18px;

    &:focus {
      outline: none;
      caret-color: #f85f36;
    }

    &:hover {
      border: 2px solid #f85f36;
    }

   @media (max-width: 768px) {
  }
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

export const ProjectTitle = styled.h3`
  margin: 0;
  color: #f85f36;
  margin: auto 0;
  font-weight: 700;
`

export const ProjectToDoList = () => {
  const [projectCreated, setProjectCreated] = useState(false);
  const [listNameCreated, setListNameCreated] = useState(false);
  const [listName, setListName] = useState('');
  const [itemName, setItemName] = useState('');
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
      complete: false
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

  return (
    <>
      {listNameCreated && (
        <div>
          {Array.isArray(lists) && lists.map((list, listIndex) => (
            <>
              <ListHeader key={list.name}>
                <ProjectTitle>Project: {list.name}</ProjectTitle>
                <ListHeaderButton type="button" onClick={() => handleProjectClick(listIndex)}>
                  {projectActive[listIndex] ? (
                  <FontAwesomeIcon icon={faChevronUp} style={{ color: '#ffffff', fontSize: '30px'}} />)
                  : (<FontAwesomeIcon icon={faChevronDown} style={{ color: '#ffffff', fontSize: '30px'}} />)}
                </ListHeaderButton>
              </ListHeader>
              {projectActive[listIndex] && (
            <div key={listIndex}>
              <TextInput 
                type="text"
                value={itemName[listIndex] || ''}
                onChange={(e) => handleItemNameChange(listIndex, e.target.value)} />
              <button type="button" onClick={() => handleAddItem(listIndex)}>ADD TODO</button>
              <ul>
                {list.items.map((item) => (
                  <li key={item.text}>{item.text}</li>
                ))}
              </ul>
            </div>)}
            </>
          ))}
        </div>)}
      {projectCreated && (<div>
        <TextInput
          type="text"
          value={listName}
          placeholder='Your project name...'
          onChange={(e) => setListName(e.target.value)} />
        <button type="button" onClick={handleAddList}>Create project</button>
      </div>)}
      <div>
        <button type="button" onClick={handleWantNewProject}>Create project</button>
      </div>
    </>
  );
}
