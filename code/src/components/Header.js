import React from "react";
import moment from 'moment'
import styled from "styled-components";

const DateTime = styled.p`
  text-align: end;
  font-size: 18px;
  font-weight: 600;
  color: #000;
  letter-spacing: 1px;
`

const Header = () => {
    const dateTime = moment().format("MMMM Do");

    return (
        <DateTime>{dateTime}</DateTime>
    )
}

export default Header