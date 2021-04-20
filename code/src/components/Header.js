import React from 'react'
import moment from 'moment'

import { HeaderDate, MainHeader } from './styled components/HeaderStyling'

export const Header = () => {
    return (
        <>
            <MainHeader>My To-Do List</MainHeader>
            <HeaderDate>{moment().format('dddd, MMMM Do YYYY')}</HeaderDate>
        </>
    )
}