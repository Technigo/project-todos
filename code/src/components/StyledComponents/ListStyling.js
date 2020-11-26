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
  width: 325px;
  border-radius: 16px;
  margin: 7%;
  margin-top: 25%;
  background-color:#ffffff;
  box-shadow: rgba(51,51,51,0.5) 0 0 10px;
`;

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
`;

export const RemoveButton = styled.button`
  font-size:20px;
  margin-left:auto;
  border:none;
  background-color:#ffffff;
  color:#dd0743;
  font-weight:700;
  cursor:pointer;
`;

export const RemoveAllButton = styled.button`
  align-self: center;
  background-color: #dd0743;
  border:none;
  font-size: 20px;
  color: #ffffff;
  border-radius: 16px;
  padding:2px 10px;
  margin-bottom:30px;
  cursor:pointer;
`

export const EmptyStateImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 30px 60px 0px 60px;
`;

export const EmptyStateText = styled.div`
  display:flex;
  justify-content:center;
  padding:20px;
  font-size:35px;
  font-family:"Didot", sans-serif;
  font-weight:700;
  color: #be648c;
`


