import React from "react"

export const AddTodo = () => {
  //  TODO:
  //  on enter/onClick dispatch the data to todoTasks reducer
  // initial state: complete: false


  return (
    <section>
      <form>
        <button type="submit">+</button>
        <label>
          {/* on enter dispatch the data to todoTasks reducer */}
          <input
            type="text"
            placeholder="Add your to-do here ..."
          />
        </label>
      </form>
    </section>
  )
}
