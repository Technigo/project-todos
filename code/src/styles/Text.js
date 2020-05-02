import styled from 'styled-components'

export const HeadLine = styled.h1`
    font-family: 'Malina1';
    font-size: 110px;
    text-shadow: 1px 2px 3px rgba(0,0,0,0.36);
    color: white;
    text-align: center;

    @media (max-width: 500px){
    font-size: 50px;
  }
`;

export const Title = styled.h2`
  font-family: 'Malina1';
  color: rgb(40, 95, 98);
  font-size: 35px;
  margin: -30px 0 -15px 0;

  @media (max-width: 500px){
    font-size: 24px;
  }
`

export const Subtitle = styled.h3`
  font-family: 'Malina1';
  color: rgb(40, 95, 98);
  font-size: 28px;
  text-align: center;
`

export const Paragraph = styled.p`
  font-family: 'Avenir-Next-Regular';
  color: rgb(40, 95, 98);
  text-transform: lowercase;
`

export const Label = styled.label`
  font-family: 'Avenir-Next-Regular';
  color: ${(props) => props.color || 'rgb(39, 94, 97)'};
  text-transform: lowercase;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const List = styled.li`
  font-family: 'Avenir-Next-Regular';
  color: ${(props) => props.color || 'white'};
  text-transform: lowercase;
  background-color: ${(props) => props.background || 'rgb(66, 146, 132)'};
  margin-bottom: 3px;
  padding: 2px;
`

export const Category = styled.span`
  color: ${(props) => props.color || 'white'};
  margin-right: 3px;
`

export const TaskText = styled.span`
  text-decoration: ${(props) => props.line || 'none'};
  min-width: 100%;
`
