import styled from 'styled-components'

export const TaskTitle = styled.h1`
  display: flex;
  margin: 4px;

  font-family: 'sora', Arial, Helvetica, sans-serif;
   font-size: 1.2rem;
  font-weight: 600;
  padding: 20px;
  color: #282828;
  &.complete-todo {
    color: whitesmoke;
  }

  @media (min-width: 600px) {
    font-size: 1.8rem;
  }
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

`;

export const Priority = styled.h3`
  display: none;
`;

export const TaskDescription = styled.p`
     font-family: 'sora', Arial, Helvetica, sans-serif;
   font-size: 1.4rem;
  font-weight: 800;
 margin: 8px;
 color: #282828;
 padding-top: 8px;
 display:none; 
 `

export const Deadline = styled.h3`
 line-height: 0rem;
 font-size: 0.8rem;
 font-weight: 400;
 &.complete-todo{
     color: grey;
 }
 `
export const CreatedAt = styled.p`
 line-height: 1rem;
 font-size: 0.7rem;
 margin-bottom: 0;
 &.complete-todo{
     color: grey;
 }
 `