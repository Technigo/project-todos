import styled from 'styled-components'

export const Form = styled.form`
padding: 14px;
display: flex;
justify-content: center;
flex-wrap: wrap;
width: 100%;
`
export const InputForm = styled.form`
padding: 14px;
display: flex;
justify-content: center;
flex-wrap: wrap;
width: 100%;
`
export const List = styled.div`
margin: 12px;
padding: 12px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: flex-start;
align-self: center;
background-color:#fff;
overflow-wrap: break-word;

@media (min-width: 1100px) { 
width: 50%;
align-items: flex-start;
border-radius: 10px;
flex-wrap: wrap;
}
`