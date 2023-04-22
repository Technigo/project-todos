import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notereminder } from 'reducers/reminders';
import { TaskBox, TrashBtn, DeleteBox, RemoveBtn, TaskParagraph } from './Styling/GlobalStyle'

export const NoteList = () => {
  const noteList = useSelector((store) => store.notes.items);
  const dispatch = useDispatch();

  const onDeleteNoteBtnClick = (id) => {
    dispatch(notereminder.actions.deleteSingleNote(id))
  }
  const onIsDoneCheckToggle = (id) => {
    dispatch(notereminder.actions.toggleIfItsDone(id))
  }
  const onDeleteAllBtnClick = () => {
    dispatch(notereminder.actions.deleteAllNotes())
  }
  return (
    <section>
      {noteList.map((singleNote) => {
        return (

          <TaskBox key={`${singleNote.id}`}>
            <input
              className="input-checkbox"
              id={`note_with_id${singleNote.id}`}
              type="checkbox"
              value={singleNote.isDone}
              onChange={() => onIsDoneCheckToggle(singleNote.id)} />

            <label htmlFor={`note_with_id${singleNote.id}`}>
              <TaskParagraph> {singleNote.todo} </TaskParagraph>
            </label>

            <TrashBtn
              type="button"
              onClick={() => onDeleteNoteBtnClick(singleNote.id)}>
              <i className="fa-regular fa-trash-can" />
            </TrashBtn>
          </TaskBox>
        )
      })}
      <DeleteBox>
        <RemoveBtn
          type="button"
          onClick={onDeleteAllBtnClick}>
          Remove all tasks
        </RemoveBtn>
      </DeleteBox>
    </section>
  )
}