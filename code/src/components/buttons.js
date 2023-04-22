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
/*font-family: 'Ubuntu Condensed', sans-serif;*/
font-family: 'Shadows Into Light';
font-weight: 600;
letter-spacing: 3px;
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
 /*color: rgb(105, 243, 209);*/
  text-shadow: 1px 1px 2px black;
  border-radius: 10px;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3));

 /*box-shadow: 0 4px 20px rgba(255, 255, 255, 0.7);*/
}
@media screen and (min-width: 667px) {
  min-height: 3rem;
  font-size: 2rem;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
}
`

export const HandleTODOButton = styled.button`
color: seashell;
width:30%;
font-family: 'Ubuntu Condensed', sans-serif;
font-size:1.3rem;
margin-bottom: 0.4rem;
height: 2.6rem;

/* From https://css.glass */
background: rgba(90, 56, 92, 0.7);
border-radius: 4px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: none;
${(props) => props.isDone && 'color: black;'}
${(props) => (props.isDone && 'background: rgba(177, 211, 196, 0.6)')};
${(props) => props.isPrioritized && 'color: black;'}
${(props) => (props.isPrioritized && 'background: rgba(177, 211, 196, 0.6)')};
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
margin-bottom: 1rem;
margin-left: 4px;
margin-right: 4px;

/* From https://css.glass */
background: rgba(90, 56, 92, 0.7);
border-radius: 4px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: none;
  background-color: ${(props) => (props.clicked ? 'black' : '')};
  color: ${(props) => (props.clicked ? 'white' : 'seashell')};
  transition: all 0.2s ease-in-out;
`;