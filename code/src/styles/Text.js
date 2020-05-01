import styled from 'styled-components'

export const HeadLine = styled.h1`
    font-family: 'Malina1';
    font-size: 90px;
    color: white;
    text-align: center;

    @media (max-width: 500px){
    font-size: 50px;
  }
`;

export const Title = styled.h2`
  font-family: 'Malina1';
  color: rgb(40, 95, 98);
  font-size: 30px;
  margin: -30px 0 -10px 0;

  @media (max-width: 500px){
    font-size: 24px;
  }
`

export const Subtitle = styled.h3`
  font-family: 'Malina1';
  color: rgb(40, 95, 98);
  font-size: 24px;
`

export const Paragraph = styled.p`
  font-family: 'Avenir-Next-Regular';
  color: ${(props) => props.color || 'darkgrey'};
  text-transform: lowercase;
`

export const Label = styled.label`
  font-family: 'Avenir-Next-Regular';
  color: ${(props) => props.color || 'rgb(39, 94, 97)'};
  text-transform: lowercase;
`

export const List = styled.li`
  font-family: 'Avenir-Next-Regular';
  color: ${(props) => props.color || 'white'};
  text-transform: lowercase;
  background-color: rgb(39, 94, 97);
  margin-bottom: 2px;
`

export const Category = styled.span`
  color: white;
`