import React from 'react';
import { useSelector } from 'react-redux'
import { TodoList } from '../components/TodoList';
import { AddProject } from '../components/AddProject';

export const TodoProjects = () => {
  const todos = useSelector(store => store.todos);

  return (
    <section>
      <AddProject />
      {Object.keys(todos).map(projectName => <TodoList key={projectName} projectName={projectName}/>)}
    </section>
  )
};

