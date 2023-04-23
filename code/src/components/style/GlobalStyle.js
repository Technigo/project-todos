import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
body {
  margin: 0;
  padding: 0;
}
`

export const Main = styled.main`
  margin: 30px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width:744px) and (max-width:1280px){
    max-width: 533px;
    margin: 45px auto 40px auto;
  }

  @media (min-width:1280px){
    margin: 40px 20px 40px 20px;
    flex-direction: row;
    justify-content: center;
  }
`

/* WRAPPERS */

export const Wrapper = styled.div`
  overflow: hidden;
  margin: 0;
`

export const ToDoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
    
  @media (min-width:1280px){
    width: 313.984px;
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
    width: 291.977px;
  }
`

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
`

/* HEADLINES AND PARAGRAPH */

export const HeaderText = styled.h2`
  font-family: "Raleway", sans-serif;
  white-space: nowrap;
  color: white;
  letter-spacing: 3px;
  text-align: center;
  font-weight: 900;
  margin: 0;
  padding-top: 10px;
  font-size: 50px;
  text-align: center;
`

export const ProjectTitle = styled.h3`
  margin: 0;
  color: #f85f36;
  margin: auto 0;
  font-weight: 700;
  font-size: 25px;
`

export const ToDotext = styled.p`
  margin: 0;
  color: #464646;
  margin: auto 0;
  font-weight: 700;
  word-break: break-word;
`

export const Duetext = styled.p`
  margin: 0;
  color: #464646;
  font-weight: 300;
  opacity: 0.7;
  margin: 5px 0 auto 0;
  font-weight: 700;
  word-break: break-word;
  font-size: 14px;
`

export const CounterText = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  display: flex;
  margin: 0;
  color: #f85f36;
`

/* BUTTONS */

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

export const CompleteButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #f85f36;
  font-weight: 900;

  &:hover:after {
    content: 'check all';
  }
`

export const DeleteButton = styled.button`
  cursor: pointer;
  background: transparent;
  outline: none;
  border: none;
`

export const DeleteAllButton = styled.button`
   background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #f85f36;
  font-weight: 900;

  &:hover:after {
    content: 'delete all';
  }
`

/* FORMS */

export const ToDoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
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
