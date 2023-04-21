import styled from 'styled-components';

export const TODOButton = styled.button`
width: 100%;
height: 3rem;
background: transparent;
text-align: left;
font-size: 2rem;
margin-top: 0.6rem;
margin-bottom: 0.6rem;

&.selected {
    background: paleturquoise;
    margin-bottom: 0;
}
`

export const HandleTODOButton = styled.button`
background: transparent;
width:33.3333%;
margin-bottom: 0.4rem;
height: 2.6rem;
`
export const ClearButtons = styled.button`
  background-color: ${(props) => (props.clicked ? 'black' : '')};
  color: ${(props) => (props.clicked ? 'white' : 'black')};
  transition: all 0.2s ease-in-out;
`;