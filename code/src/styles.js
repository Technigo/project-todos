import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`  
  body {
    margin: 0;
    background-color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
      font-size: 25px;
      text-align: center;
      margin: 20px;
      padding-top: 20px;
    }

  p {
      text-align: center;
      background-color: black;
      border: solid 1px #dcdcdc;
      border-radius: 5px;
      color: white;
    }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const TodoListContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 300px;
`

export const TaskListStyling = styled.article`
  padding: 20px;
  
  h2 {
    font-size: 16px;
  }
`

export const NewTask = styled.article`
  display: flex;
  flex-direction: column;
  background-color: black;
  padding: 15px;
  margin-bottom: 5px; 
  position: relative;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  text-align: center;
  
  .newInput {
    font-size: 15px;
  }
`

export const TaskItem = styled.article`
    background-color: black;
    color: white;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 5px; 
    position: relative; 
    min-width: 250px;
`

export const DeleteButton = styled.button`
    position: absolute;
    top: 10px; 
    right: 10px; 
    background: none;
    border: none;
    cursor: pointer;

    .delete {
      font-size: 30px;
      color: white;
      font-weight: 600;
    }
`

export const NumberOfTasks = styled.p`
    width: max-content;
    padding: 5px 5px;
    font-size: 15px;
`

export const InputArea = styled.input`
    border: 0;
    border-bottom: 3px dashed white;
    background-color: transparent;
    padding: 10px 15 px;
    // width: 30%;
    color: white;
`

export const SubmitButton = styled.button`
    border-radius: 8px;
    padding: 10px 15px;
    margin: 3px;
    background-color: white;
    font-family: 'Ubuntu', sans-serif;
`