import styled from 'styled-components'

export const DeleteImg = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 10px;
   `
export const TaskContainer = styled.section`
  width: 15vw; 
  display: flex;  
  justify-content: flex-start;  
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

export const TaskWrapper=styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100vw;
 `