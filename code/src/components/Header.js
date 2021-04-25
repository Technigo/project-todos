import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

const HeaderContainer = styled.header`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const Titel = styled.h1`
    font-size: 20px;
`

const Normaltext = styled.p`
    font-size: 12px;
`

const Header = () => {
    const items = useSelector((store) => store.tasks.items)
    const completedTasks = items.filter(item => item.isComplete)

    return (
        <HeaderContainer>
            <div>
                <Titel>Todo</Titel>
                <Normaltext>{moment(new Date().toJSON()).format('MMMM Do YYYY')}</Normaltext>
            </div>
            <div>
                <Normaltext>taks done: {completedTasks.length}/{items.length}</Normaltext>
            </div>
        </HeaderContainer>
    )
}

export default Header