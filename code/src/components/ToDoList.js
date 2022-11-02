/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import ToDo from 'reducers/todo';
import moment from 'moment';
import GarbageBin from 'components/Images/icons8-garbage-bin-64.png'

const ToDoList = () => {
  // const [loading, setLoading] = useState(false);
  const todoList = useSelector((store) => store.ToDo.items)
  const dispatch = useDispatch()

  const onIsCaughtToggle = (id) => {
    dispatch(ToDo.actions.toggleItem(id))
    // setLoading(false)
  }

  const date = new Date();
  // if (loading) {
  //   return (
  //     <p>The page is loading</p>
  //   )
  // }
  return (
    <section>
      {todoList.map((singleToDo) => {
        return (
          <ToDos>
            <h2>{singleToDo.name}</h2>
            <p>Posted: {moment(date.createdAt).fromNow()}</p>
            <label>Is this todo done?
              <input
                type="checkbox"
                checked={singleToDo.isCaught}
                onChange={() => onIsCaughtToggle(singleToDo.id)} />
            </label>
            <button onClick={() => dispatch(ToDo.actions.deleteItem(singleToDo.id))} type="button">{' '}
              <Icon
                className="icon1"
                src={GarbageBin}
                alt="Icon" />
            </button>
          </ToDos>
        )
      })}
    </section>
  )
}
export default ToDoList

const ToDos = styled.article`
  width: auto;
  margin: 15px;
  padding: 20px;
   border: solid rgb(108, 106, 106) 2px;
  background-color: rgb(255, 255, 255);
  box-shadow:  5px 10px #272727;
  display: rows;
  `

const Icon = styled.img`
border: solid red 2px;
`
