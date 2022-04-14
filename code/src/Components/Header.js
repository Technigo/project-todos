import React from "react";

import moment from "moment";

const Header = () => {
    const dateTime = moment().format("dddd, MMM Do")

    return (
        <div>
            <h1>
                Easter todo list!
            </h1>
            <section className="date">
                <p>{dateTime}</p>
            </section>
        </div>
    )
};

export default Header; 


