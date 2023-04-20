import styled from 'styled-components';

export const Content = styled.div`
  /* background-color: var(--background); */
  min-width: 20.93333rem;
  max-width: 31.25rem;
  margin: 0 auto;
  padding: 0.625rem;
  border: 0.3rem inset;
  border-image: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C) 1; 

  @media (min-width: 62rem) {
    padding: 3.125rem;
  }
`;

export const TaskForm = styled.form`
  padding: 1rem;
`;

export const SecondHeading = styled.h2`
font-family: var(--second-headings-font-family);
font-weight: 100;
font-size: 2rem;
`

export const ThirdHeading = styled.h3`
font-family: var(--second-headings-font-family);
font-weight: 100;
font-size: 1.5rem;
`

export const StyledInput = styled.input`
  padding: 0.625rem;
  border: 0.063rem solid gray;
  border-radius: 0.313rem;
  font-family: var(--paragraph-font-family);
  font-size: 1rem;
  margin-right: 0.625rem;
`;