import styled from 'styled-components';

export const ListContainer = styled.ul`
width: 80%;
margin-left:10%;
display: flex;
flex-direction: column;
list-style-type: none;
padding:0px;
`;

export const TaskListInputContainer = styled.div`
  width: 70%;
  border-radius: 16px;
  margin: 7%;
  margin-top: 25%;
  background-color:#ffffff;
  box-shadow: rgba(171,167,177,0.8) 0 0 10px;
`
export const ItemContainer = styled.li`
  display: flex;
  flex-direction:row;
  margin:0;
  padding:0;
  padding: 8px;
  margin: 8px;
  color: #3f3f3f;
  box-shadow: rgba(171,167,177,0.8) 0 0 10px;
  border-radius:16px;
`;

export const TaskText = styled.p`
margin: 0 20px 2px 8px;
font-size: 18px;
`

export const RemoveButton = styled.button`
font-size:15px;
margin-left:auto;
border:none;
background-color:#ffffff;
cursor:pointer;
`;

