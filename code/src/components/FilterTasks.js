import React from 'react'

import { FlexRow } from './styles/Containers.styled'
import { ColorLine } from './styles/FontsAndSpans.styled'

const FilterTasks = () => {
    return (
        <FlexRow>
            <ColorLine color='#5B87C9'>All Tasks</ColorLine>
            <ColorLine color='#C95B5B'>To do</ColorLine>
            <ColorLine color='#58BB48'>Done</ColorLine>
        </FlexRow>
    )
}

export default FilterTasks