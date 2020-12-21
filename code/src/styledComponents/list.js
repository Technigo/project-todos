import styled from 'styled-components'

export const ListContainer = styled.ul`
  background: #293a80;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 20px 0;
  list-style-type: none;
  justify-content: center;
  border-bottom: 2px solid #f39422;
  margin: 0;
` 

export const TodoItem = styled.li`
  font-size: 20px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: lighter;
  margin-left: 10px;
  margin-right: 10px;
`