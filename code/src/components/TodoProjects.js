import React from 'react';
import { useSelector } from 'react-redux'
import { TodoList } from '../components/TodoList';
import { AddProject } from '../components/AddProject';
import { ProjectCard, ProjectImageContainer, Image} from '../lib/Containers';
import { InputTitle, Attribute } from '../lib/Texts';

export const TodoProjects = () => {
  const todos = useSelector(store => store.todos);

  return (
    <section>
      <AddProject />
      <ProjectCard>
        {Object.keys(todos).length === 0 ? 
        <ProjectImageContainer>
          <InputTitle>Nothing to do here...</InputTitle>
          <Image src={process.env.PUBLIC_URL + '/relax.jpg'} alt='Leisure time' />
          <Attribute href="https://www.freepik.com/free-photos-vectors/people">Created by freepik</Attribute>
        </ProjectImageContainer> : 
        Object.keys(todos).map(projectName => <TodoList key={projectName} projectName={projectName}/>)}
      </ProjectCard>
    </section>
  )
};

