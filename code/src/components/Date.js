import React from "react";
import moment from "moment";
import styled from "styled-components"

const TimeStamp = styled.div`
    font-size: 16px;
    margin-bottom: 40px;
` 


const Date = () => {
    return(

        <TimeStamp>
            {moment().format('DD MMMM YYYY, HH:mm')}
        </TimeStamp>
        
    )
}

export default Date