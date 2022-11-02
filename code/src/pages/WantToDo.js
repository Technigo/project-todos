import React from 'react';
import { IdeaList } from 'components/IdeaList';
import { AddIdea } from 'components/AddIdea';
import { Link } from 'react-router-dom'

export const WantToDo = () => {
  return (
    <section>
      <IdeaList />
      <AddIdea />
      <Link to="/">
        <button type="button">Homepage</button>
      </Link>
    </section>
  )
}