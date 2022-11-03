import React from 'react';
import { IdeaList } from 'components/IdeaList';
import { AddIdea } from 'components/AddIdea';
import { HomeBtn } from 'components/HomeBtn';

export const WantToDo = () => {
  return (
    <section>
      <h2>What do you want to do?</h2>
      <IdeaList />
      <AddIdea />
      <HomeBtn />
    </section>
  )
}