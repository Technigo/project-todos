import React from "react";
import moment from "moment";

const Header = () => {
    const date = moment().format("YYYY-MM-DD")
    return(
        <header>
        <h1>TO DO:</h1>
        <p>{date}</p>
        </header>
    )
}
export default Header