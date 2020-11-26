import styled from 'styled-components';

// Header
export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  color: white;
  padding-top: 30px;
`
export const Emoji = styled.span`
  font-size: 40px;
`

// TodoSummary
export const SectionSummary = styled.section`
  width: 100%;
`
export const Styledh2 = styled.h2`
  font-size: 16px;
  text-align: right;
  width: 80%;
  margin: auto;
  font-weight: 300;
`

// TodoInput
export const Form = styled.form`
  display: flex;
  justify-content: center;
`
export const StyledLabel = styled.h3`
  font-size: 16px;
  text-align: right;
  width: 80%;
  margin: auto;
  padding: 10px;
  font-weight: 300;
`
export const InputField = styled.input`
  font-size: 20px;
  padding: 10px;
  width: 65%;
  border: none;
  border-radius: 3px;
`
export const InputAdd = styled(InputField)`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;  
  font-size: 40px;
  width: 15%;
  background: white;
  border: none;
  margin-left: -1px;
`

// TodoList
export const SectionTodoList = styled.section`
  margin-top: 30px;
`

// TodoItem, DeleteButton
export const DeleteContainer = styled.div`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;  
  display: flex;
  font-size: 18px;
  text-align: left;
  width: 80%;
  margin: auto;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`
export const DeleteButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;  
  border-radius: 50%;
  background-color: white;
  font-size: 14px;
  width: 26px;
  height: 26px;
  border: solid grey 2px;
  color: grey;
    &:last-child {
      margin-left: auto;
    }
`

// ClearAllButton
export const SectionDeleteButton = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 8px;
  background: #ffca00;
  font-size: 20px;
  color: black; 
  margin-top: 30px;
  border: none;
  border-radius: 3px;
`

  



