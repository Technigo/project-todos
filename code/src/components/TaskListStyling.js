import styled from 'styled-components';

export const Content = styled.div`
  /* background-color: var(--background); */
  min-width: 20.93333rem;
  max-width: 31.25rem;
  margin: 0 auto;
  padding: 0.625rem;
  border: 0.3rem inset;
  border-image: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C) 1; 
  text-align: center;

`;

export const TaskForm = styled.form`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

@media (min-width: 1440px) {
    flex-direction: row;;
  }
`;

export const SecondHeadingLabel = styled.label`
font-family: var(--second-headings-font-family);
font-weight: 100;
font-size: 2rem;
margin: 0;
`

export const ThirdHeading = styled.h2`
font-family: var(--second-headings-font-family);
font-weight: 100;
font-size: 1.5rem;
`

export const UncompletedTasks = styled.span`
color: #B38728;
`;
export const StyledInput = styled.input`
  padding: 0.625rem;
  border: 0.063rem solid gray;
  border-radius: 0.313rem;
  font-family: var(--paragraph-font-family);
  font-size: 1rem;
  margin-right: 0.625rem;
`;