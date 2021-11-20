import React from 'react'
import { useDispatch } from 'react-redux'
import { allComplete, deleteComplete } from 'reducers/todoData'
import { useSelector } from 'react-redux'

export const CompleteBtn = () => {

  const todo = useSelector((store) => store.todo)
  const dispatch = useDispatch()

  const complete = ()=> {

    

dispatch(allComplete({id: todo, completed: !todo.completed} ))

  }

  const deleteCompleted = ()=> {

    dispatch(deleteComplete({completed: todo.completed} ))
    
      }


  return (
    <section className="CompleteBtnContent">
      <button onClick={complete}> Complete all </button>
      <button onClick={deleteCompleted}> Delete Completed </button>
    </section>
  )
}
