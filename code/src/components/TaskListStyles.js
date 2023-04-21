import styled from 'styled-components';

export const TaskListWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
`
export const SingleTaskWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: #E6DBBC;
padding: 0.5rem;
border-radius: 1.8rem;
width: 20rem;
word-wrap: break-word;
margin-bottom: 15px;
 
li {
  display: flex;
  flex-direction: column;
  text-align: left !important;
  gap: 0.5rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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