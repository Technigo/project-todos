import React from "react";
import moment from "moment";

const Header = () => {
    const date = new Date()

return(
    <header>
     <h1>to-do list</h1>
     <p>{moment(date).format('dddd')}</p>
    </header>
)
}

export default Header