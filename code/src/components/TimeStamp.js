import React from 'react'
import moment from 'moment'


const TimeStamp = () => {

return (

    <div>
            {moment().calendar()}
    </div>


)


}

export default TimeStamp