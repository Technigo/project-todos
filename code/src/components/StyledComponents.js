import styled from 'styled-components'

export const HeaderContainer = styled.section`
display: flex;
box-sizing: border-box;
margin: 0;
padding: 20px;
width: 100%;
height: 200px;
background-color: #7F2AEC;
color: white;
border-bottom-right-radius: 20px;
border-bottom-left-radius: 20px;
`
export const HeaderTitle = styled.h1`
margin: 0 10px;
text-transform: capitalize;
font-size: 40px;
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
border: 2px solid lightgrey;
background-color: white;
color: lightgrey;
font-weight: bold;
`

export const TaskTitle = styled.p`
margin: 0 10px;
text-transform: capitalize;
` 

export const SubmitButton = styled.button`
border-radius:50%;
width: 35px;
height: 35px;
border: none;
background-color: #7F2AEC;
color: white;
font-weight: bold;
font-size: 20px;
`

export const Input = styled.input`
box-sizing: border-box;
width: 85%;
height: 50px; 
border-radius: 15px;
border: 2px solid #7F2AEC;
padding: 10px;
font-size: 14px;
`
export const Form = styled.form`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 10px 0;
`

export const ClearButton = styled.button`
width: 90px;
height: 20px;
border: none;
background-color: #7F2AEC;
color: white;
font-size: 14px;
border-radius: 10px;
`