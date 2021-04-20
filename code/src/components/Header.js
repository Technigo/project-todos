import React from 'react'
import { Typography } from '@material-ui/core';
import 'fontsource-roboto';
import moment from 'moment'

// import Counter from './Counter'

function Header() {
    return (
        <div>
            <Typography variant="h3" component="h2">
                Todo list
            </Typography>
            {/* <Counter /> */}
            <div>
                {moment().format("dddd, Do MMMM")}
            </div>
        </div>
    )
}

export default Header
