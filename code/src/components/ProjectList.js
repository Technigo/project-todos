/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import { toggleProjectComplete, deleteProject } from '../reducers/projects'

const ProjectListContainer = styled.ul`
  list-style: none;
  padding: 0;
  
`;

const ProjectListItem = styled.li`
  text-decoration: ${(props) => (props.complete ? 'line-through' : 'none')};
 color:#b8b4ba;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight:400;
  font-size: 20px;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  color:  #b8b9c7;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight:400;
  font-size: 16px;
  margin-left:10px;

  &:hover {
    text-decoration: underline;
  }
`;

const ProjectList = () => {
  const dispatch = useDispatch()
  const projects = useSelector((state) => state.projects)

  const handleToggleComplete = (id) => {
    dispatch(toggleProjectComplete(id))
  }

  const handleDeleteProject = (id) => {
    dispatch(deleteProject(id));
  };
  return (
    <ProjectListContainer>
      <ul>
        {projects.map((project) => (
          <ProjectListItem
            key={project.id}
            complete={project.complete}>
            <span onClick={() => handleToggleComplete(project.id)}>
              {project.name}
            </span>
            <DeleteButton
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteProject(project.id);
              }}>
              Delete
            </DeleteButton>
          </ProjectListItem>
        ))}
      </ul>
    </ProjectListContainer>
  );
};

export default ProjectList;
