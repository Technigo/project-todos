import React from "react";
import moment from "moment";



const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <h1 className="heading-one">Todo list</h1>
                <p className="date">{moment().format("Do MMM YY")}</p>
            </div>
        </header>
    )
}
export default Header;