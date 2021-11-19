import styled from 'styled-components'

export const TodoContainer = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  flex-direction: column;
  padding: 20px;
  position: relative;
  @media (max-width: 500px) {
    width: 250px;
  }
`
export const StyledCheckBox = styled.input`
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: black;
  width: 2em;
  height: 2em;
  border: 0.15em solid #4398bf;
  border-radius: 1em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  &::before {
    content: '';
    width: 1.3em;
    height: 1.3em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #4398bf;
  }
  &:checked::before {
    transform: scale(1);
  }
  @media (max-width: 500px) {
    width: 1.2em;
    height: 1.2em;
  }
`
export const TodoSection = styled.div`
  overflow: auto;
`

export const TodoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  //targets all children within the parent
  > * {
    display: flex;
    flex-direction: row;
    align-items: center;
    > * {
      margin: 10px;
    }
  }
`

export const AddTodoContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const AddTodoButton = styled.button`
  bottom: 0;
  background-color: #4398bf;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  width: 50px;
  height: 50px;
  padding: 20px;
  color: blue;
  border: none;
  &.addtask-active {
    transform: rotate(45deg);
  }
  > * {
    color: #fff;
    font-size: 16px;
  }
`
export const AddTodoInput = styled.input`
  border-radius: 20px;
  border: 2px solid #4398bf;
  height: 25px;
  &::placeholder {
    padding: 4px;
  }
`

export const DeleteButton = styled.button`
  margin-right: 5px;
  width: 70px;
  height: 30px;
  color: #4398bf;
  border: 2px solid #4398bf;
  border-radius: 15px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: #4398bf;
    color: #fff;
  }
  @media (max-width: 500px) {
    width: 40px;
    height: 25px;
    font-size: 10px;
  }
`
export const SendButton = styled.button`
  &.button-active {
    margin-left: 5px;
    margin-right: 15px;
    width: 80px;
    height: 30px;
    color: #4398bf;
    border: 2px solid #4398bf;
    border-radius: 15px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    background-color: #4398bf;
    color: #fff;
  }
`
