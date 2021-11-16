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
  display: flex;
  margin: 10px;
  align-items: center;
  border: #bfbf solid 2px;
`

  export const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  `


  export const AddTaskButton = styled.button `
  position: relative;
  display: block;
  color: white;
  font-size: 14px;
  font-family: "montserrat";
  text-decoration: none;
  margin: 30px 0;
  border: 2px solid #ff7675;
  padding: 14px 60px;
  text-transform: uppercase;
  overflow: hidden;
  transition: 1s all ease;

  &::before
    background: #ff7675;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: -1;
    transition: all 0.6s ease;
  
  &::before
    width: 100%;
    height: 0%;
    transform: translate(-50%,-50%) rotate(-45deg);
  
  &:hover::before
    height: 380%;
  
 `
