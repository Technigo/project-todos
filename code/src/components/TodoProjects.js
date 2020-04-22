import React from 'react';
import { useSelector } from 'react-redux'
import { TodoList } from '../components/TodoList';
import { AddProject } from '../components/AddProject';
import { ProjectCard } from '../lib/Containers'

export const TodoProjects = () => {
  const todos = useSelector(store => store.todos);

  return (
    <section>
      <AddProject />
      <ProjectCard>
        {Object.keys(todos).map(projectName => <TodoList key={projectName} projectName={projectName}/>)}
      </ProjectCard>
    </section>
  )
};

