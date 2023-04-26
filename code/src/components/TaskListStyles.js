/* eslint-disable max-len */
import styled from 'styled-components';

// I could only import these into the TaskList-component if I put this file in the same folder. I couldn't figure out why

export const TaskListWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
z-index: 3;
position: relative;
`
export const SingleTaskWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: #E6DBBC;
padding: 0.5rem;
border-radius: 2rem;
width: 20rem;
word-wrap: break-word;
margin-bottom: 15px;
 
li {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.5rem;
  font-family: 'League Spartan', sans-serif;
  font-size: 1.5rem;
  color: #444444;

  span {
    font-size: 0.8rem;
    color: #777;
  }
}

@media (min-width: 668px) {
width: 32rem;
font-size: 1rem;
}

@media (min-width: 1024px) {
width: 32rem;
font-size: 1.5rem;
}
`;
