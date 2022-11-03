import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro'
import tasks from 'reducers/tasks';
import trashbin from 'images/trashbin-icon.svg'
import Counter from './Counter';

const Footer = () => {
  const dispatch = useDispatch();

  const onDeleteAllTasks = () => {
    dispatch(tasks.actions.deleteAllTasks());
  }

  return (
    <FooterContainer>
      <Counter />
      <button
        type="button"
        onClick={onDeleteAllTasks}>
        <TrashbinIcon
          className="trashbin-icon"
          src={trashbin}
          alt="Trashbin icon" />

      </button>
    </FooterContainer>
  )
}

const FooterContainer = styled.section`

    button {
    background-color: var(--color-background);
    border: none;
    cursor: pointer;
    }
`

const TrashbinIcon = styled.img`
    width: 15px;
`

export default Footer;