import React from 'react'

import { PlaceholderPage, BoldSpan, ImageSpan, ExtraTextClearPage } from './styled components/ClearedPage.js'

export const ClearedPage = () => {
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
