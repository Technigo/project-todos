import React from 'react';
import { IdeaList } from 'components/IdeaList';
import { AddIdea } from 'components/AddIdea';
import { HomeBtn } from 'components/HomeBtn';

export const WantToDo = () => {
  return (
    <section>
      <IdeaList />
      <AddIdea />
      <HomeBtn />
    </section>
  )
}