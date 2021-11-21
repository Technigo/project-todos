import React from 'react'

import Today from './Today'
import Counter from './Counter'

const Header = () => {

    return (
    <header className='header'>
        <div className='date'>
            <Today />
        </div>
        <div className='heading-counter'>
            <h1>Your todo's!</h1>
            <Counter />
        </div>
    </header>

    )

}

export default Header