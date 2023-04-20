/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// src/components/TaskList.js
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import { toggleComplete, removeTask } from '../reducers/tasks'

const TaskListContainer = styled.div`
  margin-top: 1em;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 0.5em;
  font-size: 1.2em;
  color: #495057;
`;
const colors = ['#221E22', '#3D3B3C', '#505154', '#6F7D8C', '#97A7B3', '#B3C7D6', '#CDD7E2', '#DCE5EB', '#E8F1F4', '#EEF5F7', '#F8FCFE'];
const ProjectContainer = styled.div`
 background-color: ${(props) => props.color};
  padding: 1em;
  margin-bottom: 1em;
  border-radius: 5px;
`;

const TaskListUl = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  padding: 0.5em 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  color: red;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks)
  const projects = useSelector((state) => state.projects)
  const dispatch = useDispatch()

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id))
  }

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id))
  }

  const formatDate = (dateString, dueDate) => {
    const date = new Date(dateString);
    let formattedDate = date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });

    if (dueDate) {
      const due = new Date(dueDate);
      formattedDate += ` (due ${due.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })})`;
    }

    return formattedDate;
  };

  return (
    <TaskListContainer>
      {projects.map((project) => (
        <ProjectContainer key={project.id} color={colors[project.id % colors.length]}>
          <ProjectTitle>{project.name}</ProjectTitle>
          <TaskListUl>
            {tasks
              .filter((task) => task.projectId === project.id)
              .map((task) => (
                <TaskItem
                  key={task.id}
                  completed={task.complete}
                  onClick={() => handleToggleComplete(task.id)}>
                  {task.text}{' '}
                  <span>({formatDate(task.createdAt, task.dueDate)})</span>
                  <DeleteButton type="button" onClick={(e) => { e.stopPropagation(); handleRemoveTask(task.id); }}>
                    Delete
                  </DeleteButton>
                </TaskItem>
              ))}
          </TaskListUl>
        </ProjectContainer>
      ))}
    </TaskListContainer>
  )
}

export default TaskList
