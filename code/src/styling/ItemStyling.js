import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  justify-content:center;
  background: ${(props) =>props.background || '#fff'}
`

export const TodoContainer = styled.li`
  list-style-type: none;
  padding:20px;
  margin:5px;
  font-size: 18px;
  background-color:#F4F4F4;
  border-radius: 10px 0px;
  width:80%;
  border-bottom-style: solid;
  overflow-wrap: break-word;

  @media (min-width: 700px) and (max-width: 1024px) {
    width: 40%
  }

  @media (min-width:1025px) {
    width:30%
  }
`
export const DateWrapper = styled.div`
  display:flex;
  justify-content: flex-start;
`

export const Content = styled.div`
  display:flex;
  flex-direction:row; 
  justify-content: space-between;
  align-items: center;
`

export const TodoText = styled.p `
  display:flex;
  font-size: 16px;
`
export const DateText = styled.span `
  font-size:10px;
`

export const ListActionButton = styled.button `
  align-self: center; 
  padding: 4px;
  margin: 2px; 
  font-size: 22px; 
`