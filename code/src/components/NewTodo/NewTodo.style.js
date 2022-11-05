import styled from 'styled-components'

export const Container = styled.div`
padding: 2em; 

`

export const TodoForm = styled.form`
display: grid; 
grid-template-columns:  1fr 1fr ; 
gap: 1em; 

@media (max-width: 678px){
  display:flex;
  flex-direction: column; 
  
}
 `

export const TodoInput = styled.input`
width: 80%; 
height: 50%;
display: inline-block;
justify-content: center;
margin-top:0.5em; 
margin-left:1.5em; 
grid-column: 1 / 1; 
border-radius: 15px; 
font-family: 'Reenie Beanie';
font-weight:bold; 
font-size:2em; `

export const RadioBtnContainer = styled.div`
display: block;
text-align: center; 
@media (max-width: 678px){
  display:flex;
  flex-direction: column; 
  
}

  `

export const RadioBtn = styled.input`
margin-top: 1.5em; 
margin-right: 10px;
margin-left: 10px;  
`

export const DueDate = styled.label`
margin-top: 10px; 
font-family: 'Reenie Beanie';
font-weight:bold; 
font-size:2em; 
    `

export const SubmitBtn = styled.button`
margin-right: 20px;
text-align: center; 
display: inline-block;
border-radius: 15px;  
padding: 0.5rem 0; 
margin: 0.5rem 1rem;
width: 11rem;
background-color: #070f4e;
border: 2px solid white;
font-weight: bold; 
color: #f5ebeb; 
@media (max-width: 678px){
  text-align: center;  
  
}

  `

export const TextInput = styled.div`
 `

export const SubmittBtnContainer = styled.div`
padding-left: 1.5em; 
margin-top:15px;  `

export const HeadingContainer = styled.div`
display: flex; 
flex-direction: row;
justify-content: center; 
margin-bottom: 10px;   
 `
export const Heading = styled.h1`
padding: 10px; 
color: #f5ebeb; 
background-color: #070f4e;`