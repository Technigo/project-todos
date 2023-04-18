import React, { useState } from 'react';
import styled from 'styled-components'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NewProjectToDo } from './NewProjectToDo';
import { ProjectToDoList } from './ProjectToDoList';

export const ListHeader = styled.div`
  display: flex;
  height: 22px;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #E8E8E8;
`
export const AddButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #f85f36;
  font-weight: 900;

  &:hover:after {
    content: 'new project';
    }
`

export const NewProjectButton = () => {
  const [activeAccordion, setActiveAccordion] = useState(false);
  const [createProject, setCreateProject] = useState(false);
  const [inputValue, setInputValue] = useState(false);

  const handleAccordionClick = () => {
    setActiveAccordion(true);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setCreateProject(true);
  }

  return (
    <>
      <ListHeader>
        <p style={{ color: '#f85f36' }}>create new project</p>
        <AddButton
          accordian
          type="button"
          className={activeAccordion ? 'accordionActive' : 'accordionInactive'}
          onClick={() => handleAccordionClick()}><FontAwesomeIcon icon={faPlus} />
        </AddButton>
      </ListHeader>
      {activeAccordion && !createProject && (
        <form onSubmit={onFormSubmit}>
          <label htmlFor="newproject">
            New project name
            <input
              type="text"
              name="newproject"
              onChange={(e) => setInputValue(e.target.value)} />
          </label>
          <button
            type="submit">
            +
          </button>
        </form>
      )}
      {createProject && (
        <div>
          <h3>Project:{inputValue}</h3>
          <NewProjectToDo />
          <ProjectToDoList />
        </div>
      )}
    </>
  )
};