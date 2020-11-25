import styled from 'styled-components';


// Header
// TodoSummary
// Date
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
  font-size: 40px;
  width: 15%;
  background: white;
  border: none;
  margin-left: -1px;
`
// CustomCheckbox
// TodoList

// TodoItem, DeleteButton
export const DeleteContainer = styled.div`
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
  border-radius: 50%;
  color: white;
  font-size: 18px;
  padding: 0;
  width: 25px;
  height: 25px;
  border: solid grey .5px;
  color: grey;

    &:last-child {
      margin-left: auto;
    }
`;

// ClearAllButton

// LottieAnimation




