import styled from 'styled-components'

export const FlexRow = styled.div`
display: flex;
flex-direction: row;
`

export const FlexColumn = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
margin: 20px;
`

export const Border = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
border-radius: 10px;
margin-top: 50px;
height: 80vh;
position: relative;
margin: 20;

@media (max-width: 400px) {
    border: none;
    margin-top: 10px;
  }
`

export const TaskListFlexColumn = styled(FlexColumn)`
padding: 0;
margin-top: 0;
`
export const TaskListWrapper = styled(FlexRow)`
display: flex;
flex-direction: column;
align-content: center;
position: relative;
`

export const Card = styled(FlexColumn)`
  border: 1px solid #706B6B;
  border-radius: 5px;
  position: relative;
  margin-top: 10px;
`

export const AddTaskCard= styled.div`
 position: relative;
 display: flex;
 flex-direction: column;
`

export const TaskListWrapperLabel= styled.label`
  font-size: 1em;
  margin-bottom: 12px;
`

export const FlexRowGradientBg = styled(FlexRow)`
background-color: #fffcf9;
background-image: linear-gradient(#f5deb3, white);
border-top-left-radius: 10px;
border-top-right-radius: 10px;

@media (max-width: 400px) {
    border: none;
  }
`