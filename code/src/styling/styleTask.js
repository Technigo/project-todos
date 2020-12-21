import styled from 'styled-components'

export const DeleteImg = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 15px;
`
export const TaskContainer = styled.section`
  display: flex;  
  justify-content: center;  
  align-items: center; 
  margin-left: 30px;
  margin-top: 30px;
 `

export const TaskText = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  text-decoration: ${(props) => props.line || 'none'};
  text-transform: none;
  margin-right: 20px;
  font-family: 'Roboto Mono', monospace;
`