import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import './summary.css';

export const Summary = () => {
  const todos = useSelector((store) => store.todos.items);

  const unCompletedTodos = todos.filter((item) => !item.isComplete).length;

  const completeTodos = todos.filter((item) => item.isComplete).length;

  if (unCompletedTodos < 1) {
    return (
      <SectionEmpty>
        <h2>HOORAY </h2>
        <h3>you are free!!!</h3>
      </SectionEmpty>
    );
  } else {
    return (
      <Section>
        <h2>{unCompletedTodos}</h2>
        <h3>{` ${unCompletedTodos === 1 ? 'task' : 'tasks'}`} for today</h3>
        {completeTodos > 1 ? (
          <p>{completeTodos} tasks done</p>
        ) : (
          <p>{completeTodos} task done</p>
        )}
      </Section>
    );
  }
};

export default Summary;

const Section = styled.section`
  height: 200px;
  width: 100%;
  display: grid;
  h2 {
    font-size: 4.5em;
    color: var(--black);
    padding: 0 20%;
    margin-top: 0;
    margin-bottom: 0;
  }

  h3 {
    margin: 0;
    padding-left: 20%;
    font-size: 2.8em;
    color: var(--orange);
    width: 100%;
  }

  p {
    margin: 1% 0;
    padding-left: 20%;
    padding-bottom: 5%;
    color: var(--teal);
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
    margin-left: 45%;

    h2 {
      font-size: 6em;
    }
    h3 {
      font-size: 4em;
    }
  }
`;

const SectionEmpty = styled(Section)`
  h2 {
    padding: 0 5%;
    margin: 4% 0;
  }

  h3 {
    margin: 5%;
    padding: 0;
    font-size: 3em;
    background-color: var(--darkgrey);
  }

  p {
    padding: 0 5%;
  }
`;
