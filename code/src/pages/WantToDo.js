import React from 'react';
import { IdeaList } from 'components/IdeaList';
import { AddIdea } from 'components/AddIdea';

export const WantToDo = () => {
  return (
    <section>
      <IdeaList />
      <AddIdea />
    </section>
  )
}