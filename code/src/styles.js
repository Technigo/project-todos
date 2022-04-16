import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const devices = {
    mobile: "(min-width: 375px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)",
}

export const GlobalStyle = createGlobalStyle`  
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url(../images/backgroundPink.jpg);
    // background-color: lightpink;
    background-size: auto;
    background-repeat: no-repeat;  
    background-position-x: 9%; 
    display: flex;
    justify-content: center;
    font-family: 'Ubuntu', sans-serif;
  }

  h1 {
      font-size: 25px;
      text-align: center;
      margin: 10px 20px 0px 20px;
      border-bottom: solid black 1px;
    }

  h3 {
      font-size: 15px;
      text-align: center;
      color: black;
      font-style: italic;
    }

  p {
      text-align: center;
      border: solid 1px #EA99AA;
      border-radius: 5px;
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
  justify-content: center;
  flex-direction: column;
  min-width: 300px;
  border: solid 1px #EA99AA;
  border-radius: 5px;
  margin: 15vh 0vh 5vh 0vh;
  padding: 20px;
  background-color: pink;

  .date {
      margin-top: 10px;
      border: none;
      font-size: 12px;
  }

  @media ${devices.mobile}{
    max-width: 75vw;
  }
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
  padding: 15px;
  margin-bottom: 5px; 
  position: relative;
  color: black;
  font-weight: 600;
  text-align: center;
  
  .newInput {
    font-size: 15px;
    font-family: 'Ubuntu', sans-serif;
  }
`

export const TaskItem = styled.article`
    border: 1px solid #EA99AA;
    border-radius: 5px;
    padding: 5px 10px 10px 10px;;
    margin-bottom: 5px; 
    position: relative; 
    min-width: 250px;
`

export const DeleteButton = styled.button`
    position: absolute;
    top: 3px; 
    right: 6px; 
    background: none;
    border: none;
    cursor: pointer;

    .delete {
      font-size: 30px;
      color: #EA99AA;
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
    padding: 10px 15 px;
    margin-right: 6px;

    @media ${devices.mobile}{
        max-width: 30%;
      }
`

export const SubmitButton = styled.button`
    border-radius: 8px;
    padding: 0px 10px;
    margin: 3px;
    background-color: #EA99AA;
    color: white;
    border: solid #EA99AA 1px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
`