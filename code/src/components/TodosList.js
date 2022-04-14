import React, { useState } from "react"
import { useSelector } from 'react-redux'


import Todo from './Todo'

import SortableDroppable from './SortableDroppable'
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

import { FilteringButtonsBox, FilteringInput, Count, FilteringButton } from './styles/filteringStyles'

import { Section } from './styles/sharedStyles'

import EmptyState from './EmptyState'

const TodosList = ({ setIsUndoDisabled }) => {

  const allTodos = useSelector((store) => store.todos.items)

  const [isCompletedVisible, setIsCompletedVisible] = useState('block')
  const [isPendingVisible, setIsPendingVisible] = useState('block')
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

  let count = ''

  if (inputSearch !== '') {
    if ((pendingTodosSearched.length + completedTodosSearched.length) === 0) {
      count = `no todo fits your search`
    } else if ((pendingTodosSearched.length + completedTodosSearched.length) === 1) {
      count = `only ${pendingTodosSearched.length + completedTodosSearched.length} todo fits your search`
    } else {
      count = `${pendingTodosSearched.length + completedTodosSearched.length} todos fit your search`
    }
  } else if (pendingTodos.length === 0) {
    count = 'no todo left'
  } else if (pendingTodos.length === 1) {
    count = `only ${pendingTodos.length} todo to complete`
  } else {
    count = `${pendingTodos.length} todos to complete`
  }

  return (
    <>
      {allTodos.length ?
        <Section>
          <FilteringButtonsBox>
            <FilteringButton onClick={displayPending} disabled={isPendingDisabled}>
              <FontAwesomeIcon icon={faCircle} />
            </FilteringButton>
            <FilteringButton onClick={displayAll} disabled={isAllDisabled}>
              <FontAwesomeIcon icon={faInfinity} />
            </FilteringButton>
            <FilteringButton onClick={displayCompleted} disabled={isCompletedDisabled}>
              <FontAwesomeIcon icon={faCircleCheck} />
            </FilteringButton>
          </FilteringButtonsBox>
          <FilteringInput>
            <input
              autoComplete="off"
              onChange={onTodoSearch}
              placeholder="Search a todo or category"
              type="search"
              value={inputSearch}
            />
          </FilteringInput>
          <Count>{count}</Count>
        </Section>
        :
        ''}

      {(!pendingTodos.length && !completedTodos.length) ?
        <EmptyState
          emptyIcon={faFaceGrinHearts}
          emptyText={"Follow you mood and add some funny or boring todo in the form above."}
        />
        :
        <>
          <section style={{ display: isPendingVisible }}>
            {pendingTodos.length ?
              <SortableDroppable arrayToUse={pendingTodosSearched.reverse().map((todo) => (
                <Todo
                  id={todo.id}
                  key={todo.id}
                  setIsUndoDisabled={setIsUndoDisabled}
                  todo={todo}
                />
              ))} />
              :
              <EmptyState
                emptyIcon={faFaceGrinStars}
                emptyText={"All todos are completed, hurrah!"}
              />}
          </section>
          <section style={{ display: isCompletedVisible }}>
            {completedTodos.length ?
              <SortableDroppable arrayToUse={completedTodosSearched.reverse().map((todo) => (
                <Todo
                  id={todo.id}
                  key={todo.id}
                  setIsUndoDisabled={setIsUndoDisabled}
                  todo={todo}
                />
              ))} />
              :
              <EmptyState
                emptyIcon={faFaceGrimace}
                emptyText={"Complete some todos and this section won't be empty!"}
              />}
          </section>
        </>
      }
      {(allTodos.length && !pendingTodosSearched.length && !completedTodosSearched.length) ?
        <EmptyState
          emptyIcon={faFaceMehBlank}
          emptyText={"Nothing fits your search, maybe worth checking the spelling..."}
        />
        :
        ''}
    </>
  )
}

export default TodosList
