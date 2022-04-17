import styled from "styled-components";

export const Regular = styled.span`
  font-weight: 400;
  font-size: .6em;
`
export const CharCount = styled.p`
  margin: 0 0 0 2px;
`

export const Count= styled(Regular)`
  margin-left: 50px;
`

export const Task = styled.span`
  margin-left: 30px;
  color: black;
  position: absolute;
  bottom: 8px;
`

export const DoneTask = styled(Task)`
  color: #706B6B;
  text-decoration: line-through;
`