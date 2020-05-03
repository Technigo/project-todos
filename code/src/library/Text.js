import styled from 'styled-components'

export const Title = styled.h1`
  color: ${(props) => props.color || '#3d3d3d'};
  font-size: 2.1rem;
  text-align: center;
  font-family: 'Petit Formal Script', cursive;
`

export const Subtitle = styled.h2`
  color: ${(props) => props.color || '#3d3d3d'};
  font-size: 16px;
  text-align: center;
`
export const P = styled.h3`
  color: ${(props) => props.color || '#3d3d3d'};
  font-size: 1.1rem;
  text-align: center;
  display: inline;
  margin: 10px;
`

/* Roboto:
<link href="https://fonts.googleapis.com/css2?family=Petit+Formal+Script&family=Roboto&display=swap" rel="stylesheet">
font-family: 'Roboto', sans-serif;

Script: 
<link href="https://fonts.googleapis.com/css2?family=Petit+Formal+Script&display=swap" rel="stylesheet">
font-family: 'Petit Formal Script', cursive;
*/