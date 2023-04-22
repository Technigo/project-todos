import styled from 'styled-components';

export const TODOButton = styled.button`
width: 100%;
min-height: 2rem;
background: transparent;
text-align: left;
font-size: 1.4rem;
font-weight: bold;
margin-top: 0.4rem;
margin-bottom: 0.4rem;
color: seashell;
text-shadow: 1px 1px 2px black;
border: none;
font-family: 'Ubuntu Condensed', sans-serif;
font-weight: 300;
letter-spacing: 2px;
/*box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */

&.selected {
    background: rgba(128, 0, 128, 0.5);
    margin-bottom: 0;
}
&.selectedSaved {
    background: palegoldenrod;
    margin-bottom: 0;
}
&.isDone {
  color: lightgray;
}
&.isDone::after {
  color: black;
  content: " ✔";
}
&.isPrioritized {
  box-shadow: 0 4px 30px rgba(255, 255, 255, 0.6);
}
@media screen and (min-width: 667px) {
  min-height: 3rem;
  font-size: 2rem;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
}
`

export const HandleTODOButton = styled.button`
background: transparent;
width:33.3333%;
font-size:1.1rem;
margin-bottom: 0.4rem;
height: 2.6rem;
${(props) => props.isDone && 'color: white;'}
${(props) => props.isPrioritized && 'color: white;'}
`

export const AddButton = styled.button`
height: 50px;
padding: 0;
border: none;
background: transparent;
`
export const ClearButtons = styled.button`
height: 2rem;
font-size:1.2rem;
padding-left: 0.6rem;
padding-right: 0.6rem;
background: rgba(105, 114, 121, 0.6);
  background-color: ${(props) => (props.clicked ? 'black' : '')};
  color: ${(props) => (props.clicked ? 'white' : 'seashell')};
  transition: all 0.2s ease-in-out;
`;