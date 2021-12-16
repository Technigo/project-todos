import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import Svg from '../svg'

const FirstText = () => {
  const items = useSelector((store) => store.todos.items)

  const totalTodos = items.length

  const completedTodos = items.filter((item) => item.isComplete)

  return (
    <section className="intro-container">
      {totalTodos === 0 ? (
        <>
          <h1>
            There is <span className="mark">nothing</span> on your to do list!
            <p className="date-intro">{moment().format('MMMM Do YYYY')}</p>
          </h1>
        </>
      ) : (
        <>
          <header>
            <h1>
              Add <span className="mark">another</span> to do
            </h1>
            <p className="description-intro">
              You completed
              <span className="mark"> {completedTodos.length}</span> out of{' '}
              <span className="mark">{totalTodos}</span> things to do!
            </p>
            <p className="date-intro">{moment().format('MMMM Do YYYY')}</p>
          </header>
          <Svg />
        </>
      )}
    </section>
  )
}

export default FirstText
