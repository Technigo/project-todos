import styled from 'styled-components'

export const InputText = styled.input`
  font-size: 20px;
  width: 275px;
  height: 30px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #ccc;
  margin-left: 15px;
  color: #606060;
  outline: none;
`;

export const Title = styled.h1`
  color: ${(props) => props.color || '#fff'};
  font-size: 28px;
  letter-spacing: 2px;
  text-align: center;
  margin: 1vh;
  font-family: 'Pacifico', cursive; 
  // font-family: 'Cookie', cursive;
  // font-family: 'Berkshire Swash', cursive;
  //font-family: 'Julius Sans One', sans-serif;
`
export const Subtitle = styled.h2`
  color: ${(props) => props.color || '#fff'};
  font-size: 16px;
  text-align: center;
  margin: 1vh;
  font-family: 'Montserrat', sans-serif;
`