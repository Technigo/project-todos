import styled from 'styled-components';

export const Content = styled.div`
  background-color: rgba(145, 132, 115, 0.9);
  max-width: 24rem;
  margin: 5rem auto;
  padding: 1rem;
  text-align: center;
  border-width: 0.3rem;
  border-style: inset;
  border-color: initial;
  border-image: linear-gradient(to right, rgb(191, 149, 63), 
  rgb(252, 246, 186), rgb(179, 135, 40), rgb(251, 245, 183),
  rgb(170, 119, 28)) 1 / 1 / 0 stretch;
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
`;

export const ThirdHeading = styled.h2`
font-family: var(--second-headings-font-family);
font-weight: 100;
font-size: 1.7rem;
`;

export const TasksCompleted = styled.h2`
font-family: var(--second-headings-font-family);
font-weight: 100;
font-size: 1.7rem;
`;

export const TasksCompletedImage = styled.img`
width: 50%;
height: auto;
`;

export const UncompletedTasks = styled.span`
color: #B9B4AE;
font-weight: 700;
`;
export const StyledInput = styled.input`
  padding: 0.625rem;
  border: 0.063rem solid gray;
  border-radius: 0.313rem;
  font-family: var(--paragraph-font-family);
  font-size: 1rem;
  margin-right: 0.625rem;
`;