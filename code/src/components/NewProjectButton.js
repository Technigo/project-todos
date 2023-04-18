import React, { useState } from 'react';
import { NewProjectToDo } from './NewProjectToDo';
import { ProjectToDoList } from './ProjectToDoList';

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
      {!activeAccordion && (
        <button
          accordian
          type="button"
          className={activeAccordion ? 'accordionActive' : 'accordionInactive'}
          onClick={() => handleAccordionClick()}>Create a project
        </button>)}
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