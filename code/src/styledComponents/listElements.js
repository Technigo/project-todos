import styled from 'styled-components'

export const TodoContainer = styled.ul`
  border-bottom: 1px solid black;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 4px;
  padding: 20px;
  list-style-type: none;
`
export const TodoItem = styled.li`
  font-size: 20px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: lighter;
`