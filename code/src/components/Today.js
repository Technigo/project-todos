import React from 'react'
import moment from 'moment'
import { useSelector } from "react-redux"


const Today = () => {
    const date = useSelector(store => store.todos.today)

    return (
        <p>{moment(date).format('dddd')}, {moment(date).format('ll')}</p>
    )
}

export default Today 