import React from "react"
import { useSelector } from "react-redux"
import DayJS from "react-dayjs"

const FirstText = () => {
  const items = useSelector(store => store.todos.items)
  console.log(items)

  const totalTodos = items.length

  const filteredIsComplete = items.filter(item => item.isComplete)

  return (
    <section className="intro-container">
      {totalTodos === 0 ? (
        <>
          <h1>Looks like you need to add a todo!</h1>
          <img src="./illustration.svg" alt="illustration"></img>
        </>
      ) : (
        <>
          <header>
            <h1>Add another to do</h1>
            {/* <p>You have {totalTodos - filteredIsComplete} things to do!</p> */}
            <p>
              You completed{" "}
              <span className="mark"> {filteredIsComplete.length}</span> out of{" "}
              {totalTodos} things to do!
            </p>
            <p className="date">
              -<DayJS element="span" format="MMM D, YYYY H:mm" />
            </p>
          </header>
          <img src="./illustration.svg" alt="illustration"></img>
        </>
      )}
    </section>
  )
}

export default FirstText
