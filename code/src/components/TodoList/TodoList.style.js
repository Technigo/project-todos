import styled from 'styled-components';

export const Complete = styled.input`
  -webkit-appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid #01FB37;
  margin-right: 20px;
  background: ${(props) => (props.checked ? '#01FB37' : 'white')};
  position: absolute;
  bottom: 13px; 
  right: 25px;
`;

export const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-column: span 2; 
  padding-top: 2em;
  background-color: white; 
`

export const Todo = styled.div`
 text-decoration:none;
  color:#000;
  display:flex;
  flex-direction: column; 
  height:13em;
  width:13em;
  padding:1em;
  margin: 2em; 
  box-shadow: 5px 5px 7px rgba(33,33,33,.7);
  position:relative; 
`
export const Heading = styled.h4`
padding-bottom: 10px;
padding-top: 10px;
font-family: 'Reenie Beanie';
font-weight: bold; 
font-size: 25px; `

export const TodoText = styled.p`
font-family:  'montserrat';
font-size: 2rem; 
height: 50%; 
width: 50%;  `

export const Posted = styled.p`
top: 0; 
opacity: 0.8; 
font-family: 'montserrat';
`
export const DueDate = styled.p`
margin-bottom: 15px;
font-weight: bold; 
font-family: 'montserrat'; 
`

export const DeleteBtn = styled.div`
width: 50px; 
height: 15px; 
position: absolute;
bottom: 20px; 
right: -18px;
  
`

export const BtnContainer = styled.div`
display: flex; 
flex-direction: flex-end; `

export const TimeStampContainer = styled.div`
display:inline-block; 
font-size: 12px;
position: absolute;
bottom: 0; 
left: 10px; `