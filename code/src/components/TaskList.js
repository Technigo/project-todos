import React from 'react';
import { useSelector } from 'react-redux';

export const TaskList = () => {
  const taskList = useSelector((list) => list.tasks.items)
  //   return (
  //     <section>
  //       <ul>
  //         {taskList.map((singleTask) => {
  //           return (
  //             <ul>
  //               <li key={singleTask.id}>{singleTask.text}</li>
  //             </ul>
  //           )
  //         })}
  //       </ul>
  //     </section>
  //   )
  return (
    <section>
      {taskList.map((singleTask) => {
        return (
          <>
            <input id={singleTask.id} type="radio" />
            {singleTask.text}
          </>
        )
      })}
    </section>
  )
}