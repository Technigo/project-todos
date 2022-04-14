import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import tasks from 'reducers/tasks'

const ToDoList = () => {
  const items = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch()

  return (
    <TodoContainer>
      {items.map((task) => (
        <TodoList key={task.id} className="todo">
          <IconsContainer>
            <Label>
              <Input
                id={task.id}
                type="checkbox"
                checked={task.isComplete}
                onChange={() => dispatch(tasks.actions.toggleTasks(task.id))}
              />
              <Indicator />
            </Label>
          </IconsContainer>
          <TodoTask isComplete={task.isComplete}>{task.description}</TodoTask>
          <DoneBtn onClick={() => dispatch(tasks.actions.removeTask(task.id))}>
            X <i className="fas fa-times-circle fa-lg"></i>
          </DoneBtn>
        </TodoList>
      ))}
    </TodoContainer>
  )
}

export default ToDoList

// const Checkbox = ({ className, checked, props }) => (
//   <CheckboxContainer className={className}>
//     <HiddenCheckbox checked={checked} {...props} />
//     <Icon viewBox="0 0 24 24">
//       <polyline points="20 6 9 17 4 12" />
//     </Icon>
//     <StyledCheckbox checked={checked} />
//   </CheckboxContainer>
// )

// const Checkbox = styled.div`
//   appearance: none;
//   margin: 0;
//   color: #3a3845;
//   width: 1em;
//   height: 1em;
//   border: 3px solid black;
//   border-radius: 50%;
//   transform: translateY(-0.075em);
//   display: grid;
//   place-content: center;

//   :hover {
//     cursor: pointer;
//   }
//   ::before {
//     content: '';
//     width: 1.2em;
//     height: 1.2em;
//     border-radius: 1em;
//     transform: scale(0);
//     transition: 120ms transform ease-in-out;
//     box-shadow: inset 1em 1em #f7ccac;
//   }

//   :checked::before {
//     transform: scale(1);
//   }
// `

// const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
//   // Hide checkbox visually but remain accessible to screen readers.
//   // Source: https://polished.js.org/docs/#hidevisually
//   border: 0;
//   clip: rect(0 0 0 0);
//   clippath: inset(50%);
//   height: 1px;
//   margin: -1px;
//   overflow: hidden;
//   padding: 0;
//   position: absolute;
//   white-space: nowrap;
//   width: 1px;
// `
// const StyledCheckbox = styled.div`
//   display: inline-block;
//   width: 16px;
//   height: 16px;
//   background: ${(props) => (props.checked ? 'salmon' : 'papayawhip')};
//   border-radius: 3px;
//   transition: all 150ms;
//   ${HiddenCheckbox}:focus + & {
//     box-shadow: 0 0 0 3px pink;
//   }
// `
// const CheckboxContainer = styled.div`
//   display: inline-block;
//   vertical-align: middle;
// `
// const Icon = styled.svg`
//   fill: none;
//   stroke: white;
//   stroke-width: 2px;
// `

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 5%;
`

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`
const Label = styled.label`
  position: relative;
`

const Indicator = styled.div`
  width: 1em;
  height: 1em;
  position: absolute;
  top: 0em;
  border: 3px solid black;
  border-radius: 50%;

  ${Input}:not(:disabled):checked & {
    background: blue;
  }
  ${Label}:hover & {
    background: green;
  }
  &::after {
    content: '';
    position: absolute;
    display: none;
  }
  ${Input}:checked + &::after {
    display: block;
    top: 0em;
    left: 0.25em;
    width: 35%;
    height: 70%;
    border: solid red;
    border-width: 0 0.2em 0.2em 0;
  }
  &::disabled {
    cursor: not-allowed;
  }
`

// const Checkbox = styled.div`
//   [type='checkbox'] {
//     opacity: 0;
//   }

//   [type='checkbox'] + label {
//     position: relative;
//     padding-left: 30px;
//     cursor: pointer;
//     display: inline-block;
//     line-height: 25px;
//   }

//   [type='checkbox'] + label::before {
//     content: '';
//     position: absolute;
//     left: 0;
//     top: 0;
//     width: 18px;
//     height: 18px;
//     border-radius: 50%;
//     outline: 3px solid black;
//   }

//   [type='checkbox']:checked + label::before {
//     content: '';
//     position: absolute;
//     left: 0;
//     top: 0;
//     width: 18px;
//     height: 18px;
//     border-radius: 50%;
//     background-color: #0a4306;
//     outline: 3px solid;
//   }

//   [type='checkbox']:checked + label::after {
//     content: '';
//     position: absolute;
//     left: 0;
//     top: 0;
//     width: 18px;
//     height: 18px;
//     border-radius: 50%;
//     background-color: #0a4306;
//     outline: 3px solid black;
//     background: blue;
//   }
// `

const TodoContainer = styled.article`
  margin: 30px;
  width: calc(100% - 20px);
`

const TodoList = styled.div`
  display: flex;
  justify-content: row;
  align-items: center;
  width: 90%;
  border-bottom: 3px solid black;
  margin: 15px 0px;
`
const TodoTask = styled.h3`
  color: ${(props) => (props.isComplete ? '#064338' : '#c77700')};
  width: 80%;
  margin: 8px 8px 8px 20px;
  overflow-wrap: break-word;
`

const DoneBtn = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-family: 'rubik';
  font-size: 20px;
`
