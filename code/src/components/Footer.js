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
    <div>
      <FooterContainer>
        <Counter />
        <Button
          className="remove-all-button"
          type="button"
          onClick={onDeleteAllTasks}>
          <p>Remove all</p>
          <TrashbinIcon
            className="trashbin-icon"
            src={trashbin}
            alt="Trashbin icon" />
        </Button>
      </FooterContainer>
      <FooterText>
        <p>A website made by Ulrika Öhman @ Technigo — 11/24</p>
        <p>Copyright 2022 — Icons from Noun Project</p>
      </FooterText>
    </div>
  )
}

const FooterContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3vh 0;

        button {
        background-color: var(--color-background);
        border: none;
        cursor: pointer;
        }
`

const Button = styled.button`
    display: flex;
    align-items: center;

    :hover {
      transform: scale(1.1);
    }

    p {
        font-family: var(--font-main);
        font-weight: 600;
        text-align: center;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--color-accent);
    }
`

const TrashbinIcon = styled.img`
    width: 15px;
    margin: 5px;
`

const FooterText = styled.p`
    font-family: var(--font-main);
    font-weight: 400;
    text-align: center;
    font-size: 10px;
    padding-bottom: 2vh;
    color: var(--color-accent);
`

export default Footer;