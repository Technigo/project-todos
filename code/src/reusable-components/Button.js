import styled from 'styled-components'

export const Button = styled.button`
background:none;
border:none;
margin:0;
padding:0;
cursor:pointer;
font-size:${(props) => (props.filtering ? '0.8em' : '1em')};

:hover{
   transform: scale(1.3);
}

`