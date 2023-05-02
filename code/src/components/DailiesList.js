import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dailies } from 'reducers/dailies';
import './DailiesList.css'

export const Dailieslist = () => {
  const dailiesList = useSelector((store) => store.dailies.items)
  const dispatch = useDispatch()

  const onDeleteSingleDailyBtnClick = (id) => {
    dispatch(dailies.actions.deleteSingleDaily(id))
  }
  const onDailiesCheckboxToggle = (id) => {
    dispatch(dailies.actions.toggleDailyCompleted(id))
  }
  return (
    <section className="listSection">
      <ul>
        {dailiesList.map((singleDaily) => {
          return (
            <li key={singleDaily.id}>
              <p><span>{singleDaily.text}</span>
                <button
                  className="deleteButton"
                  type="button"
                  onClick={() => onDeleteSingleDailyBtnClick(singleDaily.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <label htmlFor={`dailies_with_id${singleDaily.id}`}>
                  Turn-in?
                  <input id={`dailies_with_id${singleDaily.id}`} type="checkbox" value={singleDaily.complete} onChange={() => onDailiesCheckboxToggle(singleDaily.id)} />
                </label>
              </p>
            </li>)
        })}
      </ul>
    </section>
  )
}
