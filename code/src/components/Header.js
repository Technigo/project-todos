import React from 'react'
//import { useDispatch } from 'react-redux'
//import { TodoTasksSummary } from './TodoTasksSummary'
//import { ClearButton } from './ClearButton'
import moment from 'moment'

export const Header = () => {
    //const dispatch = useDispatch()
    return (
        <div className="headerContainer">
            <div className="headerInfo">
                <h2>To-do list </h2>
                <span>{moment().format('dddd MMMM Do')}</span>
               
            </div>
        </div>
    )
}
