import styled from 'styled-components'

export const HeaderContainer = styled.section`
display: flex;
box-sizing: border-box;
margin: 0;
padding: 20px;
width: 100%;
height: 200px;
background-color: blue;
color: white;
`

export const TasksContainer = styled.section`
display: flex;
flex-direction: column;
box-sizing: border-box;
padding: 20px;
width: 100%;
height: auto;
`

export const TaskContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
box-sizing: border-box;
width: 100%;
height: 50px; 
margin: 10px 0;

`
export const Todo = styled.div`
display: flex;
flex-direction: row;
align-items: center;
box-sizing: border-box;
width: 85%;
height: 50px; 
margin: 10px 0;
padding: 10px;
background-color: #EFEDFF;
border-radius: 15px;
color: ${props => props.checked ? "#D1C4F6" : "#7F2AEC"};
font-weight: bold;
`

export const RemoveButton = styled.button`
border-radius:50%;
width: 25px;
height: 25px;
border: 2px solid red;
background-color: white;
color: red;
font-weight: bold;
`

export const TaskTitle = styled.p`
margin: 0 10px;
text-transform: capitalize;
` 