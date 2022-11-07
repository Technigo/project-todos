/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import styled from 'styled-components'
import { format } from 'date-fns';
import meditate from '../images/Meditation.png'

export const TodoList = () => {
  const allTodos = useSelector((store) => store.todos.items)
  const dispatch = useDispatch();

  const onCompletedToggle = (id) => {
    dispatch(todos.actions.toggleItem(id))
  }

  const now = new Date()
  const dateFormatted = format(now, "EE',' dd/MM',' h:mm a")

  const handleDeleteAll = () => {
    dispatch(todos.actions.deleteAllTasks());
  }

  const completedTasks = useSelector((state) => state.todos.items);

  const todoList = () => {
    if (completedTasks.length === 0) {
      return (
        <EmptyListWrapper>
          <EmptyMessage href="https://www.psychologytoday.com/us/blog/love-and-gratitude/201712/10-tips-what-do-when-you-have-nothing-do" target="_blank" rel="noopener noreferrer"> 10 Tips for What to Do When You Have Nothing to Do ≫</EmptyMessage>
          <EmptyPic src={meditate} alt="Meditating" />
        </EmptyListWrapper>
      )
    } else {
      return (
        <TodoListWrapper>
          {allTodos.map((singleTodo) => {
            return (
              <TodoRow key={singleTodo.id}>
                <TodoItem>
                  <label>
                    <TodoCheckbox
                      input
                      name="to-do"
                      id="todos"
                      type="checkbox"
                      checked={singleTodo.completed}
                      onChange={() => onCompletedToggle(singleTodo.id)} />
                  </label>
                  <label htmlFor="to-dos"> {singleTodo.name} </label>

                  <CreatedAt>{dateFormatted}</CreatedAt>
                </TodoItem>
                <RemoveTask onClick={() => dispatch(todos.actions.removeItem(singleTodo.id))} type="button">Remove  <span className="material-symbols-outlined"> thumb_up </span></RemoveTask>
              </TodoRow>
            );
          })}
          <Footer>
            <DeleteAllTodos onClick={handleDeleteAll}>Remove all</DeleteAllTodos>
          </Footer>
        </TodoListWrapper>
      )
    }
  }
  return (
    <>
      {todoList()}
    </>
  )
}

const TodoItem = styled.div``

const Footer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`

const TodoListWrapper = styled.section`
  background-color: rgb(236, 179, 144, 0.7);
  border-radius: 10px;
  margin: 50px 10px 10px 10px;
  height: 55vh;
  overflow: auto;
  box-shadow: 0px 0px 7px 0px #888888;
  
  //targets all children within the parent
  > * {
    display: flex;
    flex-direction: row;
    align-items: center;
    > * {
    margin: 5px;
    }
  } 
`

const TodoRow = styled.div`
  margin: 5px;
  padding: 4px;
  background-color: #FEF5ED;
  justify-content: space-between;
  font-size: 25px;
  font-family: 'Patrick Hand', cursive;

  @media (min-width: 668px){ 
    font-size: 28px;
    margin: 8px;
    padding: 8px;
  }
`

const DeleteAllTodos = styled.button`
  border-radius: 50px;
  margin: 20px;
  padding: 10px;
  border: 0;
  font-family: 'Patrick Hand', cursive;
  font-size: 19px;
  cursor: pointer;
  background-color: #FEF5ED;
  &:hover {
      transform: scale(1.1);
      transition: 0.3s ease-in-out;
  }
  @media (min-width: 1025px){ 
    padding: 12px;
    font-size: 22px;
  }
`

const TodoCheckbox = styled.input`
  margin-left: 0px;
`

const RemoveTask = styled.button`
    background-color: transparent;
    border: none;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color:#ab4b0f;
    font-family: 'Comic Neue', cursive;
    &:hover {
      transform: scale(1.1);
      transition: 0.3s ease-in-out;
      cursor: pointer;
    }

    @media (min-width: 668px){ 
    font-size: 17px;
    font-weight: 600;
    padding: 15px;
  }
`

const CreatedAt = styled.p`
  font-size:15px;
  font-family: 'Patrick Hand', cursive;

  @media (min-width: 668px){ 
    font-size: 20px;
  }
`
const EmptyListWrapper = styled(TodoListWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const EmptyMessage = styled.a`
  font-size: 25px;
  padding: 30px;
  padding-top: 15%;
  margin: 20px;
  font-family: 'Patrick Hand', cursive;
  justify-content: center;
  text-align: center;
  color: black;
  text-decoration: none;
  &:hover {
      transform: scale(1.05);
      transition: 0.3s ease-in-out;
      cursor: pointer;
    }
  
  @media (min-width: 668px){ 
    font-size: 30px;
  }
`

const EmptyPic = styled.img`
  width: 120px;
  height: auto;

@media (min-width: 668px){ 
    width: 150px;
  }
  
@media (min-width: 1025px){ 
    width: 170px;
  }
`