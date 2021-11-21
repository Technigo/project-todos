import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import './summary.css';

const Summary = () => {
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
  width: 100%;
  display: grid;
  h2 {
    font-size: 4.5em;
    color: var(--black);
    padding: 5% 30% 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  h3 {
    margin: 0;
    padding-left: 30%;
    font-size: 2.8em;
    color: var(--orange);
    width: 70%;
  }

  p {
    margin: 1% 0;
    padding-left: 30%;
    padding-bottom: 5%;
    color: var(--teal);
    width: 100%;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    h3 {
      width: 90%;
    }
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    margin-left: 10%;

    h2 {
      font-size: 6em;
    }
    h3 {
      font-size: 4em;
      width: 100%;
    }
  }

  @media screen and (min-width: 992px) {
    h2,
    h3,
    p {
      padding-left: 40%;
    }
  }

  @media screen and (min-width: 1025px) {
    width: 600px;
  }
`;

const SectionEmpty = styled(Section)`
  width: 100%;
  align-items: center;
  padding: 10%;
  h2 {
    font-size: 4em;
    margin-top: 10%;
    padding: 0;
  }

  h3 {
    margin-bottom: 10%;
    padding: 0;
    width: 100%;
  }
`;
