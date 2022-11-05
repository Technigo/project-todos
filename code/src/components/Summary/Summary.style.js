import styled from 'styled-components';

export const Container = styled.div`
display: flex; 
flex-direction: column;
padding: 1em;
margin-left: 2em;  
margin-right: 2em; `

export const Total = styled.span`
display: inline; 
font-family: 'Reenie Beanie';
font-weight:bold; 
font-size: 2em;  

`
export const Completed = styled.span`
display: inline; 
font-family: 'Reenie Beanie';
font-weight:bold; 
font-size: 2em;
margin:2em; 

`
export const Span = styled.span`
padding-top: 2em;
padding-right: 2em; 
padding-bottom: 2em; 
text-align: center; 
display: inline-block; 
@media (max-width: 678px){
  display:flex;
  flex-direction: column; 
  padding: 0; 
  
}
 `

export const HeadingContainer = styled.div`
display: flex; 
flex-direction: row;
justify-content: center; 
 
 `

export const Header = styled.h1`
color: #f5ebeb;
background-color: #070f4e;
padding: 10px; 
`