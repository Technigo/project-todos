import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
import { DeleteX } from '../assets/DeleteX'
import styled from 'styled-components'

export const Task = ({ itemIndex }) => {
  //om item ändras så ändras hela
  const item = useSelector(store => store.todos.list.items[itemIndex])

  const dispatch = useDispatch()

  //Remove task
  const onRemoveClicked = event => {
    dispatch(
      todos.actions.removeTask({
        itemIndex: itemIndex,
      }
      )
    )
  }

  // done or not status
  const handleOnChange = event => {
    dispatch(
      todos.actions.setDone({
        itemIndex: itemIndex,
        done: !item.done
      }))
  }

  return (

    <TaskItem>
      <CheckBoxLabel>
        <input type="checkbox"
          onChange={handleOnChange}
          className="todo-item-check"
          checked={item.done ? true : ""}>
        </input>
        <span className="check-new" />
      </CheckBoxLabel>
      <input type='checkbox'
        onChange={handleOnChange}
        checked={item.done ? 'checked' : ''}>
      </input>
      <span>{item.description}</span>
      <RemoveLink
        onClick={onRemoveClicked}>
        <DeleteX />
      </RemoveLink>
    </TaskItem>
  )
}

const CheckBoxLabel = styled.label`
 input{
   opacity: 0;
  }
 margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
 `


//   .checkbox - container {

//   }

// .check - new {
//   position: absolute;
//   border- radius: 50 %;
// height: 25px;
// width: 25px;
// background - color: #ff4f70;
// margin - top: 3px;
// }

// .check - new: after {
//   content: "";
//   position: absolute;
//   display: none;
// }

// .checkbox - container input: checked~.check - new: after {
//   display: block;
// }

// .checkbox - container.check - new: after {
//   left: 9px;
//   top: 5px;
//   width: 5px;
//   height: 10px;
//   border: solid white;
//   border - width: 0 3px 3px 0;
//   -webkit - transform: rotate(45deg);
//   -ms - transform: rotate(45deg);
//   transform: rotate(45deg);
// }











const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Noto Sans';
  margin: 14px;
  padding-bottom: 14px;
  border-bottom: 1px #502F4C solid;
`

const RemoveLink = styled.a`
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 0.9;
  }
`