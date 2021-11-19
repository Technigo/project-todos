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

const SectionEmpty = styled.section`
  h2 {
    font-size: 4.5em;
    color: var(--black);
    padding: 0 5%;
    margin-top: 0.5em;
    margin-bottom: 0;
  }

  h3 {
    margin: 5%;
    font-size: 3em;
    color: var(--orange);
    width: 100%;
    background-color: var(--darkgrey);
  }

  p {
    padding: 0 5%;
    color: var(--teal);
  }
`;

const Section = styled.section`
  h2 {
    font-size: 4.5em;
    color: var(--black);
    padding: 0 30%;
    margin-top: 0.5em;
    margin-bottom: 0;
  }

  h3 {
    margin: 0;
    padding-left: 30%;
    font-size: 2.8em;
    color: var(--orange);
    width: 100%;
  }

  p {
    margin: 1% 0;
    padding-left: 30%;
    color: var(--teal);
    width: 100%;
  }
`;
