import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { WantToDoRed } from 'reducers/WantToDoRed';

export const WantToDos = () => {
  const ideaList = useSelector((store) => store.WantToDoRed.items);
  const dispatch = useDispatch();

  const onIdeaIsDoneToggle = (id) => {
    dispatch(WantToDoRed.actions.toggleItem(id))
  }
  return (
    <section>
      {ideaList.map((singleIdea) => {
        return (
          <article>
            <input
              id="bla"
              type="checkbox"
              checked={singleIdea.isCaught}
              onChange={() => onIdeaIsDoneToggle(singleIdea.id)} />
            <label htmlFor="bla">{singleIdea.text}</label>
            <button type="button">X</button>
          </article>
        )
      })}
    </section>
  )
}