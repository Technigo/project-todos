import React from "react"
import { useSelector } from "react-redux"
import moment from "moment"
import Svg from "../svg"

const FirstText = () => {
  const items = useSelector(store => store.todos.items)
  console.log(items)

  const totalTodos = items.length

  const filteredIsComplete = items.filter(item => item.isComplete)

  return (
    <section className="intro-container">
      {totalTodos === 0 ? (
        <>
          <h1>
            Nothing on your to do list! <br /> Want to add one?
          </h1>
        </>
      ) : (
        <>
          <header>
            <h1>Add another to do</h1>
            <p className="description-intro">
              You completed{" "}
              <span className="mark"> {filteredIsComplete.length}</span> out of{" "}
              <span className="mark">{totalTodos}</span> things to do!
            </p>
            <p className="date-intro">
              {moment().format("MMMM Do YYYY, H:mm")}
            </p>
          </header>
          <Svg />
        </>
      )}
    </section>
  )
}

export default FirstText
