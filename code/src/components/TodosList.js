import React, { useState } from "react"
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFaceGrinHearts,
  faFaceGrimace,
  faFaceGrinStars,
  faFaceMehBlank,
  faCircle,
  faCircleCheck
} from '@fortawesome/free-regular-svg-icons'
import { faInfinity } from '@fortawesome/free-solid-svg-icons'

import Todo from './Todo'
import EmptyState from './EmptyState'
import SortableDroppable from './SortableDroppable'

import { Section } from './styles/sharedStyles'
import {
  FilteringButtonsBox,
  FilteringInput,
  Count,
  FilteringButton
} from './styles/filteringStyles'

const TodosList = ({ inputSearch, setInputSearch, setIsUndoDisabled }) => {

  const allTodos = useSelector((store) => store.todos.items)

  const pendingTodos = allTodos.filter(todo => !todo.completed)
  const pendingTodosSearched = pendingTodos.filter(todo => (
    todo.text.toLowerCase().includes(inputSearch.toLowerCase()) ||
    todo.category.toLowerCase().startsWith(inputSearch.toLowerCase())
  ))
  const completedTodos = allTodos.filter(todo => todo.completed)
  const completedTodosSearched = completedTodos.filter(todo => (
    todo.text.toLowerCase().includes(inputSearch.toLowerCase()) ||
    todo.category.toLowerCase().startsWith(inputSearch.toLowerCase())
  ))

  const [isCompletedVisible, setIsCompletedVisible] = useState('block')
  const [isPendingVisible, setIsPendingVisible] = useState('block')
  const [isAllDisabled, setIsAllDisabled] = useState(true)
  const [isCompletedDisabled, setIsCompletedDisabled] = useState(false)
  const [isPendingDisabled, setIsPendingDisabled] = useState(false)

  const onTodoSearch = (e) => {
    setInputSearch(e.target.value)
  }

  const displayAll = () => {
    setIsCompletedVisible('block')
    setIsPendingVisible('block')
    setIsAllDisabled(true)
    setIsCompletedDisabled(false)
    setIsPendingDisabled(false)
  }

  const displayCompleted = () => {
    setIsPendingVisible('none')
    setIsCompletedVisible('block')
    setIsCompletedDisabled(true)
    setIsAllDisabled(false)
    setIsPendingDisabled(false)
  }

  const displayPending = () => {
    setIsCompletedVisible('none')
    setIsPendingVisible('block')
    setIsPendingDisabled(true)
    setIsAllDisabled(false)
    setIsCompletedDisabled(false)
  }

  const searchTotal = pendingTodosSearched.length + completedTodosSearched.length
  let count = ''

  if (inputSearch !== '') {
    if (searchTotal >= 2) {
      count = `${searchTotal} todos fit your search`
    } else if (searchTotal === 1) {
      count = `only ${searchTotal} todo fits your search`
    } else if (!allTodos.length) {
      count = `no todo fits your search`
    }
  } else if (pendingTodos.length >= 2) {
    count = `${pendingTodos.length} todos pending`
  } else if (pendingTodos.length === 1) {
    count = `only ${pendingTodos.length} todo pending`
  } else {
    count = 'no todo pending'
  }

  let emptyState = ''

  if (inputSearch === '') {
    if (!allTodos.length) {
      emptyState = <EmptyState
        emptyIcon={faFaceGrinHearts}
        emptyText={"Follow you mood and add some todo!"} />
    } else if (pendingTodos.length && !completedTodos.length) {
      emptyState = <EmptyState
        emptyIcon={faFaceGrimace}
        emptyText={"Complete some todos and feel the satisfaction!"} />
    } else if (!pendingTodos.length && completedTodos.length) {
      emptyState = <EmptyState
        emptyIcon={faFaceGrinStars}
        emptyText={"All todos are completed, hurrah!"} />
    }
  } else if (inputSearch !== '') {
    if (searchTotal === 0 && allTodos.length) {
      emptyState = <EmptyState
        emptyIcon={faFaceMehBlank}
        emptyText={"Nothing fits your search, maybe worth checking the spelling..."} />
    } else if (!allTodos.length) {
      emptyState = <EmptyState
        emptyIcon={faFaceGrinHearts}
        emptyText={"Follow you mood and add some todo!"} />
    }
  }

  return (
    <>
      {allTodos.length ?
        <Section>
          <FilteringButtonsBox>
            <FilteringButton
              aria-label="display pending tasks"
              disabled={isPendingDisabled}
              onClick={displayPending}>
              <FontAwesomeIcon icon={faCircle} />
            </FilteringButton>
            <FilteringButton
              aria-label="display all tasks"
              disabled={isAllDisabled}
              onClick={displayAll}>
              <FontAwesomeIcon icon={faInfinity} />
            </FilteringButton>
            <FilteringButton
              aria-label="display completed tasks"
              disabled={isCompletedDisabled}
              onClick={displayCompleted}>
              <FontAwesomeIcon icon={faCircleCheck} />
            </FilteringButton>
          </FilteringButtonsBox>
          <FilteringInput>
            <input
              autoComplete="off"
              onChange={onTodoSearch}
              placeholder="Search a todo or category"
              type="search"
              value={inputSearch} />
          </FilteringInput>
          <Count>{count}</Count>
        </Section>
        :
        ''
      }
      <section style={{ display: isPendingVisible }}>
        <SortableDroppable arrayToUse={pendingTodosSearched.reverse().map((todo) => (
          <Todo
            id={todo.id}
            key={todo.id}
            setIsUndoDisabled={setIsUndoDisabled}
            todo={todo} />
        ))} />
      </section>
      <section style={{ display: isCompletedVisible }}>
        <SortableDroppable arrayToUse={completedTodosSearched.reverse().map((todo) => (
          <Todo
            id={todo.id}
            key={todo.id}
            setIsUndoDisabled={setIsUndoDisabled}
            todo={todo} />
        ))} />
      </section>
      {emptyState}
    </>
  )
}

export default TodosList
