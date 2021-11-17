import styled from "styled-components"

// Header
export const HeaderContainer = styled.section`
color: rgb(37, 37, 37);   
background: #ffcc67;
font-family: 'Roboto Condensed', sans-serif;
width: 100%;
margin: 0 auto;
border-radius: 0 0 30px 30px;
@media (min-width: 768px){
    width: 70%;
}
@media (min-width: 992px) {
    width: 50%;
}
`

export const HeaderBodyContainer = styled.section`
color: rgb(37, 37, 37);
border-radius: 2px;
margin: 0px auto;
display: flex;
align-items: flex-start;
justify-content: space-between;
`

export const LeftContainer = styled.div`
padding: 0 1rem;
`

export const RigthContainer = styled.div`
padding: 0 1rem;
display: flex;
flex-direction: column;
text-align: center;
align-self: self-end;
`

export const ButtonHeader = styled.button`
color: white;
background: rgb(37, 37, 37);
border: none;
padding: 10px;
margin: 10px 0;
border-radius: 10px;
font-family: 'Roboto Condensed', sans-serif;
font-size: 0.8rem;
cursor: pointer;
@media (min-width: 768px){
   font-size: 1.1rem;
}
@media (min-width: 992px) {
    font-size: 1.3rem;
}
`

export const HeaderMainTitle = styled.h1`
font-size: 1.7rem;
font-weight: 700;
margin: 0 10px;
text-align: start;
padding: 1rem 0 0.2rem 0;
@media (min-width: 768px){
   font-size: 2.2rem;
}
@media (min-width: 992px) {
    font-size: 2.5rem;
}
`

export const HeaderSubTitle = styled.h2`
font-size: 1rem;
font-weight: 400;
margin: 1.2rem 0 0 0;
@media (min-width: 768px){
   font-size: 1.3rem;
}
@media (min-width: 992px) {
    font-size: 1.5rem;
}
`

// Wrappers
  export const FlexItem = styled.div`
  background: rgb(60, 60, 60);
  display: flex;
  margin: 10px;
  padding: 5px;
  border: rgb(100, 100, 100) solid 2px;
  border-radius: 25px;
  word-break: break-word;
`

  export const AddTaskButton = styled.button `
    padding: 0.9em 2em;
    border: 2px solid #ffcc67;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    color: #ddd;
    transition: .3s;
    z-index: 1;
    font-family: inherit;
    color: #ffcc67;
   
   &::before {
    content: '';
    width: 0;
    height: 300%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: #ffcc67;
    transition: .5s ease;
    display: block;
    z-index: -1;
   }
   
   &:hover::before {
    width: 105%;
   }
   
   &:hover {
    color: #111;
   }
`
// TextInput
export const InputContainer = styled.div`
   display: flex;
   justify-content: center;
   background: rgb(60, 60, 60);
   margin: 10px;
   padding: 5px;
   align-items: center;
   border: rgb(100, 100, 100) solid 2px;
   border-radius: 10px;
`

export const TextInput = styled.input`
  border: none;
  padding: 0.5em 1em;
  font-size: 12px;
  border-radius: 10px 0 0 10px;
  background: rgb(100, 100, 100);
  color: #ddd;
  @media (min-width: 768px){
    font-size: 1.1rem;
  }
  @media (min-width: 992px) {
     font-size: 1.3rem;
  }
`

// TextInput Button
export const InputButton = styled.button`
  border: none;
  padding: 0.5em 1em;
  font-size: 12px;
  border-radius:  0 10px 10px 0;
  background: rgb(37, 37, 37);
  color: #ddd;
 @media (min-width: 768px){
  font-size: 1.1rem;
  }
  @media (min-width: 992px) {
   font-size: 1.3rem;
  }
`

// Checkbox

   export const TaskLabel = styled.label `
   display: flex;
   align-items: center;
   margin: auto 10px;
   font-family: 'Roboto', sans-serif;
   font-size: 0.8rem;
   @media (min-width: 768px){
       font-size: 0.9rem;
   }
   @media (min-width: 992px) {
       font-size: 1.1rem;
   }
   `
   export const TaskInput = styled.input `
   font-family: 'Roboto', sans-serif;
   width: 1em;
   height: 1em;
   background-color: white;
   border-radius: 50%;
   vertical-align: middle;
   border: 1px solid #ddd;
   appearance: none;
   -webkit-appearance: none;
   outline: none;
   cursor: pointer;
     &:checked{
       background-color: gray;
     }
   `
  