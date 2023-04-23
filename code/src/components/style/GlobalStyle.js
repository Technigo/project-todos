import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
body {
    margin: 0;
    padding: 0;
}
`
export const ToDoCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  position: relative;
  background-color: oldlace;
`

export const ToDoInnerCard = styled.div`
  display: flex;
  gap: 10px;
`

export const ToDoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const ListHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  background: pink;
`

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
`

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width:1280px){
    width: 313.984px;
  }
`
export const ListHeaderButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: pink;
  font-weight: 900;
`

export const ListFooter = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  background: pink;
`

export const ButtonsBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
`

export const ToDotext = styled.p`
  margin: 0;
  color: #464646;
  margin: auto 0;
  font-weight: 700;
  word-break: break-word;
`

export const CounterText = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  display: flex;
  margin: 0;
  color: #f85f36;
`

export const ProjectTitle = styled.h3`
  margin: 0;
  color: #f85f36;
  margin: auto 0;
  font-weight: 700;
  font-size: 25px;
`

export const DeleteButton = styled.button`
  cursor: pointer;
  background: transparent;
  outline: none;
  border: none;
`

export const TextInput = styled.input`
  background: #FFFFFF;
  border: 2px solid #f85f36;
  outline: none;
  border-radius: 8px;
  height: 48px;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 15px;
  font-size: 18px;

    &:focus {
      outline: none;
      caret-color: #f85f36;
    }

    &:hover {
      border: 2px solid pink;
    }
`

export const ToDoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
export const AddNewProjectContainer = styled.div`
  display: flex;
  height: 29.5px;
  padding: 10px;
  gap: 10px;
  align-items: center;
  background: #E8E8E8;

    @media (min-width:1280px){
      width: 293.977px;
    }
  }
`
export const ProjectNameContainer = styled.div`
  display: flex;
  height: 27.5px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: 1px solid  #f85f36;

     &:hover {
      border: 1px solid  pink;
    }

    @media (min-width:1280px){
      width: 293.977px;
    }
`

export const AddButton = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  justify-content: space-between;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #f85f36;
  font-weight: 900;
`
export const AddButton2 = styled.button`
  width: 50%;
  background: transparent;
  border: none;
  outline: none;
  justify-content: flex-end;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #f85f36;
  font-weight: 900;
`

export const FormButton = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  justify-content: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #f85f36;
  font-weight: 900;
`
export const ProjectNameInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  height: 100%;
  width: fit-content;
  box-sizing: border-box;
  color:#f85f36;
  font-size: 20px;

    &:focus {
      caret-color: #f85f36;
    }
`
