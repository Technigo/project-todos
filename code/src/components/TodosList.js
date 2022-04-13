import React, { useState } from "react"
import { useSelector } from 'react-redux'

import { FilteringButton } from './styling/IconsButtons'

import Todo from './Todo'

import SortableDroppable from './SortableDroppable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import { FilteringSection, FilteringButtonsBox, FilteringInput, Count } from './styling/StyledFiltering'

const TodosList = ({ setIsUndoDisabled }) => {

  const allTodos = useSelector((store) => store.todos.items)

  const [completedVisible, setCompletedVisible] = useState('block')
  const [pendingVisible, setPendingVisible] = useState('block')
  const [isAllDisabled, setIsAllDisabled] = useState(true)
  const [isCompletedDisabled, setIsCompletedDisabled] = useState(false)
  const [isPendingDisabled, setIsPendingDisabled] = useState(false)

  const [inputSearch, setInputSearch] = useState('')

  const pendingTodos = allTodos.filter(todo => !todo.completed)
  const pendingTodosSearched = pendingTodos.filter(todo => todo.text.toLowerCase().includes(inputSearch.toLowerCase()) || todo.category.toLowerCase().startsWith(inputSearch.toLowerCase()))
  const completedTodos = allTodos.filter(todo => todo.completed)
  const completedTodosSearched = completedTodos.filter(todo => todo.text.toLowerCase().includes(inputSearch.toLowerCase()) || todo.category.toLowerCase().startsWith(inputSearch.toLowerCase()))

  const onTodoSearch = (e) => {
    setInputSearch(e.target.value)
  }

  const displayAll = () => {
    setCompletedVisible('block')
    setPendingVisible('block')
    setIsAllDisabled(true)
    setIsCompletedDisabled(false)
    setIsPendingDisabled(false)
  }

  const displayCompleted = () => {
    setPendingVisible('none')
    setCompletedVisible('block')
    setIsCompletedDisabled(true)
    setIsAllDisabled(false)
    setIsPendingDisabled(false)
  }

  const displayPending = () => {
    setCompletedVisible('none')
    setPendingVisible('block')
    setIsPendingDisabled(true)
    setIsAllDisabled(false)
    setIsCompletedDisabled(false)
  }

  return (
    <>
      <FilteringSection>
        <FilteringButtonsBox>
          <FilteringButton onClick={displayPending} disabled={isPendingDisabled}><FontAwesomeIcon icon={faCircle} /></FilteringButton>
          <FilteringButton onClick={displayAll} disabled={isAllDisabled}><FontAwesomeIcon icon={faGlobe} /></FilteringButton>
          <FilteringButton onClick={displayCompleted} disabled={isCompletedDisabled}><FontAwesomeIcon icon={faCircleCheck} /></FilteringButton>
        </FilteringButtonsBox>
        <FilteringInput>
            <input placeholder="Search a task or a category" type="search" name="q" onChange={onTodoSearch} value={inputSearch} autoComplete="off" />
        </FilteringInput>
        <Count>{pendingTodos.length} tasks left to do</Count>
      </FilteringSection>

      <div style={{ display: pendingVisible }}>
        <SortableDroppable arrayToUse={pendingTodosSearched.reverse().map((todo) => (
          <Todo key={todo.id} todo={todo} id={todo.id} setIsUndoDisabled={setIsUndoDisabled} />
        ))} />
      </div>


      <div style={{ display: completedVisible }}>
        <SortableDroppable arrayToUse={completedTodosSearched.reverse().map((todo) => (
          <Todo key={todo.id} todo={todo} id={todo.id} setIsUndoDisabled={setIsUndoDisabled} />
        ))} />

      </div>

      {/* use just one count? */}
      {/* {allTodos.length !== 0 && <span><p>{allTodos.length} tasks ({pendingTodos.length} pending)</p> <p>{allTodos.length} tasks ({completedTodos.length} completed)</p></span>} */}

    </>
  )
}

export default TodosList
