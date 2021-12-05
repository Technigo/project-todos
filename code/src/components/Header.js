import React from "react";

import moment from "moment";

const Header = () => {
    const dateTime = moment().format("dddd, MMM Do, H:mm:ss")

    return (
        <header>
            <h1>
                My todo list.
            </h1>
            <section className="date-time">
                <p>{dateTime}</p>
            </section>
        </header>
    )
}

export default Header