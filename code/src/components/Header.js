import React from 'react'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'

import { tasks } from '../reducers/tasks'
import { HeaderContainer, HeaderDate, HeaderTitleDateContainer, HeaderCounterButtonContainer, MainHeader, CompletedTasksText, AllDoneButton } from './styled components/HeaderStyling'

const Header = () => {
    const dispatch = useDispatch()

    const totalNumberOfTasks = useSelector((store) => (
        store.tasks.items.length
        ))

     //number of completed tasks in the list
     const completedTasks = useSelector((store) => (
        store.tasks.items.filter((task => task.completed)).length
        ))

    const onClickClearAll = () => {
        dispatch(tasks.actions.clearAllTasks())
    }

    return (
        <HeaderContainer>
            <HeaderTitleDateContainer>
                <MainHeader>Todo</MainHeader>
                <HeaderDate>{moment().format('MMMM Do')}</HeaderDate>
            </HeaderTitleDateContainer>
            <HeaderCounterButtonContainer>
                <CompletedTasksText>
                    Completed: {completedTasks}/{totalNumberOfTasks}
                </CompletedTasksText>
                <AllDoneButton onClick={onClickClearAll}>
                    All done!
                </AllDoneButton>
            </HeaderCounterButtonContainer>
        </HeaderContainer>
    )
}

export default Header