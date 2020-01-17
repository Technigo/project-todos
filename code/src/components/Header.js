import React from 'react'
import { useDispatch } from 'react-redux'
import { TodoTasksSummary } from './TodoTasksSummary';
import { ClearButton } from './ClearButton';


export const Header = () => {

    // Count the uncompleted to-dos
    // const countUncompleted = Array.filter(item => item.completed !== true)

    // Count to-do's
    // Array.length


    const dispatch = useDispatch()
    return (
        <article className="headerContainer">
            <div className="headerInfo">
                <TodoTasksSummary />
                <ClearButton />
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