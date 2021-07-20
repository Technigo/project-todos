import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { format } from 'date-fns'

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
    const date = new Date()
    const todaysDate = format(date, "E dd MM yyyy")

    return (
        <HeaderContainer>
            <div>
                <Titel>Todo</Titel>
                <Normaltext>
                    {todaysDate}
                </Normaltext>
            </div>
            <div>
                <Normaltext>
                    tasks done: {completedTasks.length}/{items.length}
                </Normaltext>
            </div>
        </HeaderContainer>
    )
}

export default Header