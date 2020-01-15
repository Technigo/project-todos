import React from 'react'
import { useDispatch } from 'react-redux'


export const Header = () => {
    const dispatch = useDispatch()
    return (
        <article className="headerContainer">
            <div className="headerInfo">
                <h1>To-do</h1>
                <h5>January 17th</h5>
                {/* <span className="todoName" role="text"></span> */}
                {/* <p>{total.quantity}st</p> */}
            </div>

            <div className="headerTasks">
                <div className="taskTotal"><
                    h5>4 tasks</h5>
                </div>
                <div className="totalButton">
                    <button type="button" onClick><p>Clear all</p></button>
                </div>
            </div>
        </article>
    )
}

// const styles = StyleSheet.create`
// backgrund-color: black; 
// `