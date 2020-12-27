import styled from 'styled-components'

export const DeleteImg = styled.img`
    width: 30px;
    height: 30px;
    margin-left:0;
   `
export const TaskContainer = styled.section`
  width: 30%; 
  display: flex;  
  justify-content: flex-start;  
   margin-left: 30px;
  margin-top: 20px;
  word-wrap: break-word;
  @media (max-width: 415px) {
    width: 90%; 
    height: 20px;
  }
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