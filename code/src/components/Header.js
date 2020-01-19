import React from 'react'
import { useDispatch } from 'react-redux'
import { TodoTasksSummary } from './TodoTasksSummary';
import { ClearButton } from './ClearButton';


export const Header = () => {

    const dispatch = useDispatch()
    return (
        <div className="headerContainer">
            <div className="headerInfo">
                <h1>To-do</h1>
                <h5>January 17th</h5>
            </div>

        </div>
    )
}

// const styles = StyleSheet.create`
// backgrund-color: black; 
// `