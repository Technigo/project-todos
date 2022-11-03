import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { IdeaReducer } from 'reducers/reducers';
import { ClearScreenIdea } from 'components/ClearScreenIdea'
import { IdeaCounter } from './Counters';

export const IdeaList = () => {
  const ideaList = useSelector((store) => store.IdeaReducer.items);
  const dispatch = useDispatch();

  const onIdeaIsDoneToggle = (id) => {
    dispatch(IdeaReducer.actions.toggleIdea(id))
  }

  const onDeleteIdea = (id) => {
    dispatch(IdeaReducer.actions.deleteIdea(id))
  }

  return (
    <div>
      {(ideaList.length === 0) ? (
        <ClearScreenIdea />
      ) : (
        <IdeaContainer>
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
                <button type="button" onClick={() => onDeleteIdea(singleIdea.id)}>X</button>
              </article>
            )
          })}
        </IdeaContainer>
      )}
    </div>
  )
}

const IdeaContainer = styled.section`
background-color: rgba(54, 54, 54, 0.734);
`