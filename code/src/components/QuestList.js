import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import quests from '../reducers/quests'

const QuestList = () => {
  const items = useSelector((store) => store.quests.items)

  const dispatch = useDispatch()

  const onToggleAllQuests = (checked) => {
    dispatch(quests.actions.toggleAllQuests(checked))
  }

  const onToggleQuest = (id) => {
    dispatch(quests.actions.toggleQuest(id))
  }

  const onRemoveQuest = (id) => {
    dispatch(quests.actions.removeQuest(id))
  }

  const updateStatus = (id, value) => {
    dispatch(quests.actions.changeStatus({ id, value }))
  }

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>
              <label className='checkbox'>
                <input
                  type='checkbox'
                  // test each element and return a boolean value
                  checked={items.every((item) => item.isComplete)}
                  onChange={(event) => onToggleAllQuests(event.target.checked)}
                />
              </label>
            </th>
            <th>Quest</th>
            <th>Status</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    checked={item.isComplete}
                    onChange={() => onToggleQuest(item.id)}
                  />
                </label>
              </td>
              <td className={item.isComplete ? 'completed' : 'active'}>
                {item.text}
              </td>
              <td>
                <select
                  value={item.status}
                  onChange={(event) => {
                    updateStatus(item.id, event.target.value)
                  }}
                >
                  <option value='todo'>Todo</option>
                  <option value='in progress'>In Progress</option>
                  <option value='completed'>Completed</option>
                </select>
              </td>
              <td>
                <button
                  type='button'
                  className='remove-button'
                  onClick={() => onRemoveQuest(item.id)}
                >
                  <i className='fas fa-trash' />
                </button>
              </td>
            </tr>
          ))}
          {items.length === 0 ? (
            <tr>
              <td colSpan='4' className='empty-state'>
                Add your first quest above
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </section>
  )
}

export default QuestList
