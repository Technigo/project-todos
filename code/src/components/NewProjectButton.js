/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components'
import uniqid from 'uniqid';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux';
import { tasksproject } from 'reducers/tasksproject';
import { ProjectToDoList } from './ProjectToDoList';

export const ListHeader = styled.div`
  display: flex;
  height: 22px;
  gap: 10px;
  align-items: center;
  background: #E8E8E8;
`
export const AddButton = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  justify-content: space-between;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #f85f36;
  font-weight: 900;
`
export const ProjectInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  height: 22px;
  box-sizing: border-box;
  padding: 5px 15px;
  font-size: 18px;
  margin: none;

    &:focus {
      outline: none;
      border-bottom: 1px solid black;
    }

    &:hover {
    }

   @media (max-width: 768px) {
  }
`

export const ProjectForm = styled.form`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 100%;
`

export const NewProjectButton = () => {
  const [createProject, setCreateProject] = useState(false);
  const [projects, setProjects] = useState([]);
  const [projectIndex, setProjectIndex] = useState(0);
  const dispatch = useDispatch();

  const handleCreateNewProject = (listIndex) => {
    setProjectIndex(projectIndex + 1)
    setCreateProject(true);
    dispatch(tasksproject.actions.addList(listIndex));
    setProjects([...projects, { id: uniqid(), name: '', items: [] }]);
  }

  return (
    <>
      <ListHeader>
        <AddButton
          type="button"
          onClick={() => handleCreateNewProject()}><p style={{ color: '#f85f36' }}>create new project</p><FontAwesomeIcon icon={faPlus} />
        </AddButton>
      </ListHeader>
      {createProject && (
        <ProjectToDoList />
      )}
    </>
  )
};