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
          <h1>No to do! Want to add one?</h1>
          <Svg />

          {/* <img src="./illustration.svg" alt="illustration"></img> */}
        </>
      ) : (
        <>
          <header>
            <h1>Add another to do</h1>
            {/* <p>You have {totalTodos - filteredIsComplete} things to do!</p> */}
            <p className="description-intro">
              You completed{" "}
              <span className="mark"> {filteredIsComplete.length}</span> out of{" "}
              <span className="mark">{totalTodos}</span> things to do!
            </p>
            <p className="date-intro">
              {moment(items.time).format("MMMM Do YYYY, h:mm")}
            </p>
          </header>
          <Svg />
        </>
      )}
    </section>
  )
}

export default FirstText
