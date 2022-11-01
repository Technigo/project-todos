import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import { MainSections, MainText } from '../styles/mainStyles'

const List = () => {
  const [listItem, setListItem] = useState(false);

  const taskList = useSelector((store) => store.tasks.items);

  const dispatch = useDispatch();

  const handleQuestion2Change = () => {
    dispatch(tasks.actions.toggleItem())
    setListItem()
  }

  return (
    <MainSections>
      {taskList.map((singleItem) => {
        return (
          <article>
            <MainText>{singleItem.name}</MainText>
            <label htmlFor="tasks">
              <input
                className="label-box"
                name={listItem}
                type="checkbox"
                id="tasks"
                value="tasks"
                checked={singleItem.isCaught}
                onChange={(event) => handleQuestion2Change(event)} />
              I am working
            </label>
            <button type="button">X</button>
          </article>
        )
      })}

    </MainSections>
  )
}

export default List;