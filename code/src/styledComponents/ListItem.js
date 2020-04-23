import styled from 'styled-components'


export const ListItem = styled.p`
  font-size: 24px;  
  margin: 0;
  text-decoration: ${(props) => (props.isChecked ? 'line-through' : 'none')};
`