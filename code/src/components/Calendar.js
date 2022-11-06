import moment from 'moment'
import React from 'react'
import toDos from 'reducers/toDos';

const Calendar = () => {
  return (
    <h3> Today is a new day ☘️
      <p className="moment">
        {moment(toDos.createdAt).format('LL')}
      </p>
    </h3>
  );
}

export default Calendar;
