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

export const Card = styled(FlexColumn)`
  border: 1px solid #706B6B;
  border-radius: 5px;
  position: relative;
`

export const AddTaskCard= styled.div`
 position: relative;

 & img {
    width: 45px;
    position: absolute;
    right: -10px;
    top: 10px;
 }
`