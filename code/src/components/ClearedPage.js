import React from 'react'

import { PlaceholderPage, BoldSpan, ExtraTextClearPage } from './styled components/ClearedPageStyling.js'

const ClearedPage = () => {
    return (
        <PlaceholderPage>
            <p>You have completed <BoldSpan>all</BoldSpan> your tasks.</p>
            <p>Well done, you deserve a treat!</p>
            <img className='icecream-image'
                     src='../assets/ice-cream.png'
                     alt='icecream' 
            /> 
            <ExtraTextClearPage>
                Or maybe you JUST thought of something more you need to do?
            </ExtraTextClearPage>
        </PlaceholderPage>
    )
}

export default ClearedPage
