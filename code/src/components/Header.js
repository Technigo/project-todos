import React from 'react'
import { useDispatch } from 'react-redux'
import { TodoTasksSummary } from './TodoTasksSummary'
import { ClearButton } from './ClearButton'
import moment from 'moment'

export const Header = () => {
    const dispatch = useDispatch()
    return (
        <div className="headerContainer">
            <div className="headerInfo">
                <h2>To-do <span className="header-icon" role="emoji" aria-label="todo emoji" > 🔖</span></h2>
                {/* <span>{moment().format("MMM Do YY")}</span> */}
                <span>{moment().format('dddd MMMM Do')}</span>
            </div>
        </div>
    )
}


// const styles = StyleSheet.create`
// backgrund-color: black; 
// `
