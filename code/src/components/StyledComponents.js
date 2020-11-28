import styled from 'styled-components'

export const HeaderContainer = styled.section`
display: flex;
flex-direction:column;
justify-content: space-between;
box-sizing: border-box;
margin: 0;
padding: 20px;
width: 100%;
height: 200px;
background-color: #7F2AEC;
color: white;
border-bottom-right-radius: 20px;
border-bottom-left-radius: 20px;
font-family: 'Poppins', sans-serif;

`
export const HeaderTitle = styled.h1`
margin: 0 10px;
font-size: 20px;
font-weight: 400;
`

export const CategoryTitle = styled.h1`
margin: 0 10px;
font-size: 30px;
font-weight: 700;
`

export const FilterButton = styled.button`
width: auto;
height: auto;
border: none;
background-color: #EFEDFF;
font-family: 'Poppins', sans-serif;
font-size: 14px;
font-weight: 600;
color: #7F2AEC;
border-radius: 15px;
cursor: pointer;
margin: 0 10px;
padding: 3px 9px;
`

export const TasksContainer = styled.section`
display: flex;
flex-direction: column;
box-sizing: border-box;
padding: 20px;
width: 100%;
height: auto;
font-family: 'Poppins', sans-serif;
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
export const Todo = styled.label`
display: flex;
position: relative;
flex-direction: row;
align-items: center;
justify-content: space-between;
box-sizing: border-box;
width: 87%;
min-height: 55px; 
margin: 10px 0; 
padding: 10px;
background-color: #EFEDFF;
border-radius: 15px;
`

export const RemoveButton = styled.button`
border-radius:50%;
width: 25px;
height: 25px;
border: 2px solid lightgrey;
background-color: white;
color: lightgrey;
font-weight: bold;
cursor: pointer;
`

export const TaskTitle = styled.p`
margin: 0;
margin-left: 35px;
color: ${props => props.checked ? "#D1C4F6" : "#7F2AEC"};
text-decoration: ${props => props.checked ? "line-through" : "none"};
font-weight: bold;
` 
export const TimeStamp = styled.p`
position: absolute;
bottom: 0;
right: 10px;
color: #D1C4F6;
font-size: 10px;
text-align: right;
` 

export const DueDate = styled.p`
position: absolute;
top: 0;
right: 10px;
color: #D1C4F6;
font-size: 10px;
text-align: right;
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
cursor: pointer;
`
export const AddTaskButton = styled(SubmitButton)`
position: fixed;
bottom: 30px;
right: 20px;
width: 50px;
height: 50px;
box-shadow: 2px 2px 10px 2px #D1C4F6;
`


export const Input = styled.input`
box-sizing: border-box;
width: 85%;
height: 50px; 
border-radius: 15px;
border: 2px solid #7F2AEC;
padding: 10px;
font-size: 16px;
&::placeholder {
    color: #D1C4F6;
}


`
export const Form = styled.form`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: 10px;
`

export const ClearButton = styled.button`
width: 90px;
height: auto;
border: none;
background-color: #7F2AEC;
font-family: 'Poppins', sans-serif;
color: white;
font-size: 14px;
border-radius: 10px;
cursor: pointer;
margin: 10px 0;
`

export const TopInfo = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
color: #D1C4F6;
font-size: 14px;
`

export const DueButton = styled.button`
width: auto;
height: auto;
border: none;
background-color: #7F2AEC;
font-family: 'Poppins', sans-serif;
color: white;
font-size: 14px;
border-radius: 15px;
cursor: pointer;
padding: 5px 10px;
margin: 10px 0;
`

export const DueDateContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 85%;
color: red;
font-size: 14px;
`