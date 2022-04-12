import styled from 'styled-components'

export const FlexRow = styled.div`
display: flex;
flex-direction: row;
`

export const FlexColumn = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
`

export const TaskListFlexColumn = styled(FlexColumn)`
padding: 0;
`
export const TaskListWrapper = styled(FlexRow)`
display: flex;
flex-direction: column;
position: relative;
`

export const Card = styled(FlexColumn)`
  border: 1px solid #706B6B;
  border-radius: 5px;
  position: relative;
`

export const AddTaskCard= styled.div`
 position: relative;
 display: flex;
 flex-direction: column;
`