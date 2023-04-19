import React from 'react';
import { useSelector } from 'react-redux';
import { TaskBox } from './Styling/GlobalStyle'

export const NoteList = () => {
  const noteList = useSelector((store) => store.notes.items)
  return (
    <section>
      <ul>
        {noteList.map((singleNote) => {
          return (
            <TaskBox>
              <li key={singleNote.id}>{singleNote.name}</li>
            </TaskBox>
          )
        })}
      </ul>
    </section>
  )
}