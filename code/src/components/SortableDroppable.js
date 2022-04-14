import React, { useEffect, useState } from "react"
import Sortable from "sortablejs"

const SortableDroppable = ({ arrayToUse }) => {

  const [droppable, setDroppable] = useState(null)

  useEffect(() => {
    if (droppable) {
      Sortable.create(droppable, {
        easing: "cubic-bezier(0.2, 0, 0, 1)",
        handle: '.handle',
        animation: 150,
        ghostClass: "dragging",
        scroll: true,
        scrollSensitivity: 100,
        bubbleScroll: true
      })
    }
  }, [droppable])

  return (
    <>
      <div ref={(el) => setDroppable(el)}>
        {arrayToUse}
      </div>
    </>
  )
}

export default SortableDroppable
