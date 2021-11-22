import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import quests from '../reducers/quests'

const Table = styled.table`
  width: 100%;
  max-width: 80%;
  text-align: center;
  margin: 0 auto;
  border-collapse: collapse;
  box-shadow: 8px 8px 16px #d3d3d3;

  td,
  th {
    padding: 1rem 0.8rem;
  }

  thead tr {
    border-bottom: 2px solid #f7898e;
  }

  tr:not(:last-child) {
    border-bottom: 1px solid #f7898e;
  }

  .checkbox {
    display: inline-flex;
    cursor: pointer;
    position: relative;
  }

  .checkbox > input {
    height: 1.15rem;
    width: 1.15rem;
    appearance: none;
    border: 2px solid #012f66;
    border-radius: 4px;
    outline: none;
    transition-duration: 0.4s;
    background-color: #fedd00;
    cursor: pointer;
    margin: 0;
    transform: translateY(0.2rem);
  }
  .checkbox > input:checked,
  .checkmark {
    background-color: #012f66;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }
  .checkbox > input:active {
    transform: scale(1.1);
  }

  .completed {
    text-decoration: line-through;
    color: rgba(0, 0, 0, 0.5);
  }

  .active {
    font-size: 18px;
  }

  select {
    font-family: 'Cantarell', sans-serif;
    border: none;
    border-radius: 4px;
    background-color: #efefef;
    min-width: 50%;
  }

  .remove-button {
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
  }

  .remove-button:active {
    opacity: 0.5;
  }

  .empty-state {
    color: lightslategray;
  }

  @media (hover: hover) {
    .remove-button:hover {
      background-color: #f7898e;
    }
  }

  @media (max-width: 375px) {
    font-size: 10px;
    .active {
      font-size: 12px;
    }
    select {
      font-size: 10px;
    }
  }
`

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
      <Table>
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
      </Table>
    </section>
  )
}

export default QuestList
