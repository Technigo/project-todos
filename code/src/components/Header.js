import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

const Header = () => {
  const items = useSelector(store => store.todo.items)
  const [counterDone, setCounterDone] = useState()
  const [counterNotDone, setCounterNotDone] = useState()

  const counterCalculator = (items) => {
    let counterDone = 0
    let counterNotDone = 0
    items.forEach(item => {
      if (item.isComplete) {
        counterDone++
      } else {
        counterNotDone++
      }
      setCounterDone(counterDone)
      setCounterNotDone(counterNotDone)
    })
  }
  useEffect(() => {
    counterCalculator(items)
  }, [items])
  return (
    <div className="header-container">
      <h1>To do</h1>
      <div className="date-wrapper">
        <p>{moment().format('dddd')} </p>
        <p>{moment().format('MMMM Do')} </p>
      </div>

      <div className="done-undone-wrapper">
        <p>{items.length > 0 && counterDone} Items done</p>
        <p>{items.length > 0 && counterNotDone} Items  not done</p>
      </div>
    </div>
  )
}
export default Header