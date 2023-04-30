import styled from 'styled-components/macro'

export const Button = styled.button`
background:none;
border:none;
margin:0;
padding:0;
cursor:pointer;
font-size:1em;
position:${(props) => (props.delete ? 'absolute' : '')};
top: -25px;
right: -25px;
:hover{
   transform: scale(1.3);
}

`