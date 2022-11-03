import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IdeaReducer } from 'reducers/reducers';
import { ClearScreenIdea } from 'components/ClearScreenIdea'
import { IdeaCounter } from './Counters';

export const IdeaList = () => {
  const ideaList = useSelector((store) => store.IdeaReducer.items);
  const noIdeas = useSelector((state) => state.IdeaReducer.noIdeas);
  const dispatch = useDispatch();

  const onIdeaIsDoneToggle = (id) => {
    dispatch(IdeaReducer.actions.toggleItem(id))
  }
  return (
    <div>
      {noIdeas ? (
        <ClearScreenIdea />
      ) : (
        <section>
          <IdeaCounter />
          {ideaList.map((singleIdea) => {
            return (
              <article>
                <input
                  id={singleIdea.id}
                  type="checkbox"
                  checked={singleIdea.isCaught}
                  onChange={() => onIdeaIsDoneToggle(singleIdea.id)} />
                <label htmlFor="bla">{singleIdea.text}</label>
                <button type="button">X</button>
              </article>
            )
          })}
        </section>
      )}
    </div>
  )
}