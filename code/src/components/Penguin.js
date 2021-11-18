import React from 'react'
import penguin from '../penguin.svg'
// import penguin_2 from '../penguin_2.svg'


const Penguin = () => {
    console.log('penguin')

    return (
        <>
        <img className='penguin' src={penguin} alt='penguin-icon'/>
        {/* <img className='penguin' src={penguin_2} alt='penguin-icon'/> */}
        </>
    )
}


export default Penguin