import styled from 'styled-components';

export const Content = styled.div`
  /* background-color: var(--background); */
  min-width: 20.93333rem;
  max-width: 31.25rem;
  margin: 0 auto;
  padding: 0.625rem;
  border: 0.3rem solid var(--primary-background-color);

  @media (min-width: 62rem) {
    padding: 3.125rem;
  }
`;

export const TaskForm = styled.form`
  border: transparent;
`;
