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
  background-color: pink;
  border-radius: 80px;
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
  background: #f85f36;
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
  font-family: "Raleway", sans-serif;
`

export const ProjectTitle = styled.h3`
  margin: 0;
  color: #f85f36;
  margin: auto 0;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
`

export const DeleteButton = styled.button`
  cursor: pointer;
  background: transparent;
  outline: none;
  border: none;
`

export const TextInput = styled.input`
  background: #FFFFFF;
  border: 2px solid pink;
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
      border: 2px solid #f85f36;
    }
`

export const ToDoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const AddNewProjectContainer = styled.div`
  display: flex;
  height: 32px;
  padding: 10px;
  gap: 10px;
  align-items: center;
  background: #E8E8E8;
`
export const ProjectNameContainer = styled.div`
  display: flex;
  height: 32px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  background: #E8E8E8;
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
  width: 30%;
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
export const ProjectNameInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  height: 100%;
  width: fit-content;
  box-sizing: border-box;
  font-size: 18px;

    &:focus {
      caret-color: #464646;
    }

    &:hover {
      border-bottom: 1px solid #464646;
    }
`
