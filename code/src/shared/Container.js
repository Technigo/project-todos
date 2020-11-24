import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  justify-content:center;
  background: ${(props) =>props.background || '#d9ecf2'}
`