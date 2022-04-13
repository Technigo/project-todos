import React from 'react'

import { useSelector } from "react-redux";

import { FlexRow } from './styles/Containers.styled'
import { FilterButton} from './styles/Buttons.styled'

const FilterTasks = () => {

const allTasks = useSelector((store) => store.tasks.items);

    return (
        <FlexRow>
            <FilterButton color='#5B87C9'>All Tasks</FilterButton>
            <FilterButton color='#C95B5B'>To do</FilterButton>
            <FilterButton color='#58BB48'>Done</FilterButton>
        </FlexRow>
    )
}

export default FilterTasks