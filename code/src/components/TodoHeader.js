import React from 'react'
import moment from 'moment'


const TodoHeader = () => {
    const today = moment()


    return (
        <header>
            <h1>What's up today?</h1>
            <p>{today.format('YYYY-MM-DD')}</p>
        </header>
    )
}
export default TodoHeader